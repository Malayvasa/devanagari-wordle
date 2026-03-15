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

const keyStateColors: Record<LetterState, string> = {
  correct: "bg-green-600 text-white border-green-600",
  present: "bg-yellow-500 text-white border-yellow-500",
  absent: "bg-gray-700 text-gray-400 border-gray-700",
  empty: "bg-gray-600 text-white border-gray-600 hover:bg-gray-500",
  filled: "bg-gray-600 text-white border-gray-600",
};

interface KeyProps {
  label: string;
  state?: LetterState;
  onClick: () => void;
  wide?: boolean;
}

function Key({ label, state = "empty", onClick, wide }: KeyProps) {
  const colorClass = keyStateColors[state];
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center
        ${wide ? "px-3 min-w-[48px]" : "w-8 sm:w-10"}
        h-12 sm:h-14
        rounded
        border
        text-sm sm:text-base
        font-bold
        transition-colors duration-200
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
      <div className="flex gap-1 justify-center mt-1">
        <Key label="⌫ मिटाएं" onClick={onDelete} wide />
        <Key label="↵ दर्ज करें" onClick={onEnter} wide />
      </div>
    </div>
  );
}
