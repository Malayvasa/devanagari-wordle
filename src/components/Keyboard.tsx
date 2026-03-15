import type { LetterState } from "../utils/devanagari";

interface KeyboardProps {
  keyStates: Record<string, LetterState>;
  onKey: (key: string) => void;
  onDelete: () => void;
  onEnter: () => void;
}

const KEY_ROWS = [
  ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ"],
  ["ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न"],
  ["प", "फ", "ब", "भ", "म", "य", "र", "ल", "व"],
  ["श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ", "ड़", "ढ़"],
];

const VOWEL_KEYS = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ"];

const keyStateColors: Record<LetterState, string> = {
  correct: "bg-[#2D8B46] text-white border-[#2D8B46]",
  present: "bg-[#C4A000] text-white border-[#C4A000]",
  absent: "bg-[#1E1535] text-gray-500 border-[#2A2040]",
  empty: "bg-[#2A2040] text-white border-[#3D3260] hover:bg-[#3D3260] hover:border-[#FF6B35]/40",
  filled: "bg-[#2A2040] text-white border-[#3D3260]",
};

interface KeyProps {
  label: string;
  state?: LetterState;
  onClick: () => void;
  wide?: boolean;
  accent?: boolean;
}

function Key({ label, state = "empty", onClick, wide, accent }: KeyProps) {
  const colorClass = accent
    ? "bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white border-[#FF6B35] hover:from-[#FF8C42] hover:to-[#FFA060]"
    : keyStateColors[state];
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center
        ${wide ? "px-3 min-w-[48px]" : "w-8 sm:w-10"}
        h-12 sm:h-14
        rounded-lg
        border
        text-sm sm:text-base
        font-bold
        transition-all duration-200
        cursor-pointer
        select-none
        active:scale-95
        ${colorClass}
      `}
    >
      {label}
    </button>
  );
}

export default function Keyboard({ keyStates, onKey, onDelete, onEnter }: KeyboardProps) {
  return (
    <div className="flex flex-col gap-1.5 items-center w-full max-w-lg mx-auto px-1">
      {/* Vowel row for words starting with vowels */}
      <div className="flex gap-1 justify-center flex-wrap">
        {VOWEL_KEYS.map(key => (
          <Key
            key={key}
            label={key}
            state={keyStates[key] || "empty"}
            onClick={() => onKey(key)}
          />
        ))}
      </div>
      {KEY_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1 justify-center flex-wrap">
          {row.map(key => (
            <Key
              key={key}
              label={key}
              state={keyStates[key] || "empty"}
              onClick={() => onKey(key)}
            />
          ))}
        </div>
      ))}
      <div className="flex gap-2 justify-center mt-1">
        <Key label="⌫ मिटाएं" onClick={onDelete} wide />
        <Key label="↵ दर्ज" onClick={onEnter} wide accent />
      </div>
    </div>
  );
}
