import { useState, useEffect, useCallback } from "react";
import { getDailyWord, getRandomWord } from "../data/words";
import type { Word } from "../data/words";
import type { LetterState } from "../utils/devanagari";

export type GameMode = "daily" | "practice";
export type GameStatus = "playing" | "won" | "lost";

export interface GuessResult {
  consonant: string;
  matra: string;
  state: LetterState;
}

export interface UseGameReturn {
  targetWord: Word;
  guesses: GuessResult[][];
  currentGuess: string[];
  currentRow: number;
  gameStatus: GameStatus;
  gameMode: GameMode;
  keyStates: Record<string, LetterState>;
  shakeRow: number | null;
  flipRow: number | null;
  toast: string | null;
  addLetter: (letter: string) => void;
  removeLetter: () => void;
  submitGuess: () => void;
  startPractice: () => void;
  startDaily: () => void;
  dismissToast: () => void;
}

const WORD_LENGTH = 4;
const MAX_GUESSES = 6;

function evaluateGuess(guess: string[], target: Word): GuessResult[] {
  const result: GuessResult[] = Array(WORD_LENGTH).fill(null).map((_, i) => ({
    consonant: guess[i] || "",
    matra: target[i].matra,
    state: "absent" as LetterState,
  }));

  const targetConsonants = target.map(s => s.consonant);
  const used = Array(WORD_LENGTH).fill(false);

  // First pass: mark correct
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guess[i] === targetConsonants[i]) {
      result[i].state = "correct";
      used[i] = true;
    }
  }

  // Second pass: mark present
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (result[i].state === "correct") continue;
    for (let j = 0; j < WORD_LENGTH; j++) {
      if (!used[j] && guess[i] === targetConsonants[j]) {
        result[i].state = "present";
        used[j] = true;
        break;
      }
    }
  }

  return result;
}

export function useGame(initialMode: GameMode = "daily"): UseGameReturn {
  const [gameMode, setGameMode] = useState<GameMode>(initialMode);
  const [targetWord, setTargetWord] = useState<Word>(() =>
    initialMode === "daily" ? getDailyWord() : getRandomWord()
  );
  const [guesses, setGuesses] = useState<GuessResult[][]>([]);
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");
  const [keyStates, setKeyStates] = useState<Record<string, LetterState>>({});
  const [shakeRow, setShakeRow] = useState<number | null>(null);
  const [flipRow, setFlipRow] = useState<number | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
  }, []);

  const dismissToast = useCallback(() => {
    setToast(null);
  }, []);

  const addLetter = useCallback((letter: string) => {
    if (gameStatus !== "playing") return;
    if (currentGuess.length >= WORD_LENGTH) return;
    setCurrentGuess(prev => [...prev, letter]);
  }, [gameStatus, currentGuess.length]);

  const removeLetter = useCallback(() => {
    if (gameStatus !== "playing") return;
    setCurrentGuess(prev => prev.slice(0, -1));
  }, [gameStatus]);

  const submitGuess = useCallback(() => {
    if (gameStatus !== "playing") return;
    if (currentGuess.length < WORD_LENGTH) {
      showToast("अभी और अक्षर चाहिए!");
      setShakeRow(currentRow);
      setTimeout(() => setShakeRow(null), 600);
      return;
    }

    const result = evaluateGuess(currentGuess, targetWord);
    const newGuesses = [...guesses, result];
    setGuesses(newGuesses);
    setFlipRow(currentRow);

    // Update key states
    const newKeyStates = { ...keyStates };
    result.forEach(r => {
      const current = newKeyStates[r.consonant];
      if (current === "correct") return;
      if (r.state === "correct") {
        newKeyStates[r.consonant] = "correct";
      } else if (r.state === "present") {
        newKeyStates[r.consonant] = "present";
      } else if (!current) {
        newKeyStates[r.consonant] = "absent";
      }
    });
    setKeyStates(newKeyStates);
    setCurrentGuess([]);

    const won = result.every(r => r.state === "correct");
    const newRow = currentRow + 1;
    setCurrentRow(newRow);

    setTimeout(() => {
      setFlipRow(null);
      if (won) {
        setGameStatus("won");
        const msgs = ["शानदार!", "बढ़िया!", "अद्भुत!", "उत्कृष्ट!", "वाह!", "शाबाश!"];
        showToast(msgs[Math.min(currentRow, msgs.length - 1)]);
      } else if (newRow >= MAX_GUESSES) {
        setGameStatus("lost");
        // Show the target word
        const wordStr = targetWord.map(s => s.consonant + s.matra).join("");
        showToast(`सही शब्द: ${wordStr}`);
      }
    }, WORD_LENGTH * 100 + 350);
  }, [gameStatus, currentGuess, currentRow, guesses, keyStates, targetWord, showToast]);

  const startPractice = useCallback(() => {
    setGameMode("practice");
    setTargetWord(getRandomWord());
    setGuesses([]);
    setCurrentGuess([]);
    setCurrentRow(0);
    setGameStatus("playing");
    setKeyStates({});
    setShakeRow(null);
    setFlipRow(null);
    setToast(null);
  }, []);

  const startDaily = useCallback(() => {
    setGameMode("daily");
    setTargetWord(getDailyWord());
    setGuesses([]);
    setCurrentGuess([]);
    setCurrentRow(0);
    setGameStatus("playing");
    setKeyStates({});
    setShakeRow(null);
    setFlipRow(null);
    setToast(null);
  }, []);

  // Keyboard handler
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        removeLetter();
      } else if (e.key === "Enter") {
        submitGuess();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [removeLetter, submitGuess]);

  return {
    targetWord,
    guesses,
    currentGuess,
    currentRow,
    gameStatus,
    gameMode,
    keyStates,
    shakeRow,
    flipRow,
    toast,
    addLetter,
    removeLetter,
    submitGuess,
    startPractice,
    startDaily,
    dismissToast,
  };
}
