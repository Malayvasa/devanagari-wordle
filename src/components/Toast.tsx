import { useEffect } from "react";

interface ToastProps {
  message: string | null;
  onDismiss: () => void;
  duration?: number;
}

export default function Toast({ message, onDismiss, duration = 2000 }: ToastProps) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [message, onDismiss, duration]);

  if (!message) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <div
        className="bg-white text-gray-900 font-bold px-5 py-3 rounded-lg shadow-xl text-center text-base max-w-xs"
        style={{ animation: `toast-slide ${duration / 1000}s ease-in-out forwards` }}
      >
        {message}
      </div>
    </div>
  );
}
