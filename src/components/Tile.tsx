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
  correct: "bg-[#2D8B46] border-[#2D8B46] text-white",
  present: "bg-[#C4A000] border-[#C4A000] text-white",
  absent: "bg-[#2A2040] border-[#2A2040] text-gray-400",
  empty: "bg-transparent border-[#3D3260] text-white",
  filled: "bg-transparent border-[#FF6B35]/60 text-white",
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
    "flex flex-col items-center justify-center border-2 select-none relative overflow-hidden rounded-lg";
  const sizeClass = "w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem]";

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
      {consonant ? (
        /* Show combined syllable (consonant + matra) when user has entered a consonant */
        <span className="text-3xl sm:text-4xl font-bold leading-none">
          {consonant}{matra || ""}
        </span>
      ) : (
        /* Show just the matra as a dim hint when no consonant entered yet */
        matra && (
          <span
            className="text-3xl sm:text-4xl leading-none text-[#FF6B35]"
            style={{ opacity: 0.35 }}
          >
            {"◌"}{matra}
          </span>
        )
      )}
    </div>
  );
}
