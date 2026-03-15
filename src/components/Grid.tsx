import type { Word } from "../data/words";
import type { GuessResult } from "../hooks/useGame";
import type { LetterState } from "../utils/devanagari";
import Tile from "./Tile";

interface GridProps {
  targetWord: Word;
  guesses: GuessResult[][];
  currentGuess: string[];
  currentRow: number;
  shakeRow: number | null;
  flipRow: number | null;
}

const WORD_LENGTH = 4;
const MAX_GUESSES = 6;

export default function Grid({
  targetWord,
  guesses,
  currentGuess,
  currentRow,
  shakeRow,
  flipRow,
}: GridProps) {
  return (
    <div className="flex flex-col gap-1.5 items-center">
      {Array.from({ length: MAX_GUESSES }, (_, rowIndex) => {
        const isSubmittedRow = rowIndex < guesses.length;
        const isCurrentRow = rowIndex === currentRow;
        const isShaking = shakeRow === rowIndex;
        const isFlipping = flipRow === rowIndex;

        return (
          <div key={rowIndex} className="flex gap-1.5">
            {Array.from({ length: WORD_LENGTH }, (_, colIndex) => {
              if (isSubmittedRow) {
                const result = guesses[rowIndex][colIndex];
                return (
                  <Tile
                    key={colIndex}
                    consonant={result.consonant}
                    matra={result.matra}
                    state={result.state}
                    isFlipping={isFlipping}
                    flipDelay={colIndex * 100}
                    isShaking={isShaking}
                  />
                );
              }

              if (isCurrentRow) {
                const letter = currentGuess[colIndex];
                const matra = targetWord[colIndex].matra;
                const state: LetterState = letter ? "filled" : "empty";
                return (
                  <Tile
                    key={colIndex}
                    consonant={letter}
                    matra={matra}
                    state={state}
                    isShaking={isShaking}
                    isCurrent={!!letter && colIndex === currentGuess.length - 1}
                  />
                );
              }

              // Future row
              const matra = targetWord[colIndex].matra;
              return (
                <Tile
                  key={colIndex}
                  matra={matra}
                  state="empty"
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
