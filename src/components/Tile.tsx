import type { LetterState } from "../utils/devanagari";

interface TileProps {
  consonant?: string;
  matra?: string;
  state: LetterState;
  isFlipping?: boolean;
  flipDelay?: number;
  isShaking?: boolean;
  isCurrent?: boolean;
}

const stateColors: Record<LetterState, string> = {
  correct: "bg-green-600 border-green-600 text-white",
  present: "bg-yellow-500 border-yellow-500 text-white",
  absent: "bg-gray-700 border-gray-700 text-white",
  empty: "bg-transparent border-gray-600 text-white",
  filled: "bg-transparent border-gray-400 text-white",
};

export default function Tile({
  consonant,
  matra,
  state,
  isFlipping,
  flipDelay = 0,
  isShaking,
  isCurrent,
}: TileProps) {
  const baseClass =
    "flex flex-col items-center justify-center border-2 select-none relative overflow-hidden";
  const sizeClass = "w-14 h-14 sm:w-16 sm:h-16";

  const colorClass = stateColors[state];

  const animClass = isShaking
    ? "tile-shake"
    : isFlipping
    ? "tile-flip"
    : isCurrent && consonant
    ? "tile-pop"
    : "";

  const animStyle: React.CSSProperties = isFlipping
    ? { animationDelay: `${flipDelay}ms` }
    : {};

  return (
    <div
      className={`${baseClass} ${sizeClass} ${colorClass} ${animClass}`}
      style={animStyle}
    >
      {/* Consonant */}
      <span className="text-2xl sm:text-3xl font-bold leading-none">
        {consonant || ""}
      </span>
      {/* Matra shown dimmed as hint */}
      {matra && (
        <span
          className="text-xs sm:text-sm leading-none mt-0.5"
          style={{
            opacity: state === "empty" || state === "filled" ? 0.35 : 0.9,
          }}
        >
          {matra}
        </span>
      )}
    </div>
  );
}
