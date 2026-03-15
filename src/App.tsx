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
    <div className="min-h-screen bg-[#121213] text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-700 px-4">
        <div className="max-w-lg mx-auto flex items-center justify-between h-14">
          <button
            onClick={() => setShowModal(true)}
            className="text-gray-400 hover:text-white transition-colors text-xl"
            title="कैसे खेलें"
          >
            ?
          </button>
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-center">
            देवनागरी वर्डल
          </h1>
          <div className="flex gap-2">
            <button
              onClick={startDaily}
              className={`text-xs px-2 py-1 rounded border transition-colors ${
                gameMode === "daily"
                  ? "border-white text-white bg-white/10"
                  : "border-gray-600 text-gray-400 hover:border-gray-400"
              }`}
            >
              Daily
            </button>
            <button
              onClick={startPractice}
              className={`text-xs px-2 py-1 rounded border transition-colors ${
                gameMode === "practice"
                  ? "border-white text-white bg-white/10"
                  : "border-gray-600 text-gray-400 hover:border-gray-400"
              }`}
            >
              अभ्यास
            </button>
          </div>
        </div>
      </header>

      {/* Mode indicator */}
      {gameMode === "practice" && (
        <div className="text-center text-xs text-yellow-400 py-1 bg-yellow-400/10">
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
                className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-2 rounded-lg transition-colors"
              >
                नया शब्द
              </button>
            ) : (
              <button
                onClick={startPractice}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2 rounded-lg transition-colors"
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
