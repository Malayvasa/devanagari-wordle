import { useState } from "react";
import { useGame } from "./hooks/useGame";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";
import Toast from "./components/Toast";
import "./index.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const {
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
  } = useGame("daily");

  return (
    <div className="min-h-screen bg-[#0F0A1A] text-white flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#FF6B35]/20 via-[#1B1464]/40 to-[#FF6B35]/20 border-b border-[#FF6B35]/30 px-4">
        <div className="max-w-lg mx-auto flex items-center justify-between h-16">
          <button
            onClick={() => setShowModal(true)}
            className="text-[#FFD700]/70 hover:text-[#FFD700] transition-colors text-xl w-8 h-8 rounded-full border border-[#FFD700]/30 flex items-center justify-center hover:border-[#FFD700]/60"
            title="कैसे खेलें"
          >
            ?
          </button>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide bg-gradient-to-r from-[#FF6B35] via-[#FFD700] to-[#FF6B35] bg-clip-text text-transparent">
              The Akshar App
            </h1>
            <p className="text-xs text-[#FFD700]/60 -mt-0.5">अक्षर</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={startDaily}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                gameMode === "daily"
                  ? "border-[#FF6B35] text-[#FF6B35] bg-[#FF6B35]/15 shadow-[0_0_8px_rgba(255,107,53,0.3)]"
                  : "border-gray-600 text-gray-400 hover:border-[#FF6B35]/50 hover:text-[#FF6B35]/70"
              }`}
            >
              Daily
            </button>
            <button
              onClick={startPractice}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                gameMode === "practice"
                  ? "border-[#FF6B35] text-[#FF6B35] bg-[#FF6B35]/15 shadow-[0_0_8px_rgba(255,107,53,0.3)]"
                  : "border-gray-600 text-gray-400 hover:border-[#FF6B35]/50 hover:text-[#FF6B35]/70"
              }`}
            >
              अभ्यास
            </button>
          </div>
        </div>
      </header>

      {/* Mode indicator */}
      {gameMode === "practice" && (
        <div className="text-center text-xs text-[#FFD700] py-1.5 bg-[#FFD700]/10 border-b border-[#FFD700]/20">
          अभ्यास मोड — जितना चाहें खेलें!
        </div>
      )}

      {/* Main game area */}
      <main className="flex-1 flex flex-col items-center justify-between py-4 gap-4 max-w-lg mx-auto w-full px-2">
        {/* Grid */}
        <div className="flex-1 flex items-center justify-center">
          <Grid
            targetWord={targetWord}
            guesses={guesses}
            currentGuess={currentGuess}
            currentRow={currentRow}
            shakeRow={shakeRow}
            flipRow={flipRow}
          />
        </div>

        {/* Game over controls */}
        {gameStatus !== "playing" && (
          <div className="flex gap-3">
            {gameMode === "practice" ? (
              <button
                onClick={startPractice}
                className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#FF8C42] hover:to-[#FF6B35] text-white font-bold px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(255,107,53,0.4)]"
              >
                नया शब्द
              </button>
            ) : (
              <button
                onClick={startPractice}
                className="bg-gradient-to-r from-[#1B1464] to-[#2D2080] hover:from-[#2D2080] hover:to-[#1B1464] text-[#FFD700] font-bold px-6 py-2.5 rounded-full transition-all border border-[#FFD700]/30 shadow-[0_0_15px_rgba(27,20,100,0.4)]"
              >
                अभ्यास करें
              </button>
            )}
          </div>
        )}

        {/* Keyboard */}
        <div className="w-full">
          <Keyboard
            keyStates={keyStates}
            onKey={addLetter}
            onDelete={removeLetter}
            onEnter={submitGuess}
          />
        </div>
      </main>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Toast */}
      <Toast
        message={toast}
        onDismiss={dismissToast}
        duration={gameStatus !== "playing" ? 4000 : 2000}
      />
    </div>
  );
}
