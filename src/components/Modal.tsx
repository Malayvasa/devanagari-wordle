interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#1A1230] border border-[#3D3260] rounded-2xl max-w-md w-full p-6 shadow-[0_0_30px_rgba(255,107,53,0.15)]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FFD700] bg-clip-text text-transparent">
            कैसे खेलें
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        <div className="text-sm text-gray-300 space-y-3">
          <p>
            4 अक्षरों वाले हिंदी शब्द का अनुमान लगाएं। आपके पास <strong className="text-white">6 प्रयास</strong> हैं।
          </p>
          <p>
            मात्राएँ <span className="text-[#FF6B35]">संकेत</span> के रूप में पहले से दिखाई गई हैं। आपको केवल <strong className="text-white">व्यंजन</strong> (consonants) का अनुमान लगाना है।
          </p>

          <div className="border-t border-[#3D3260] pt-3 mt-3">
            <p className="font-bold text-white mb-2">रंगों का मतलब:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#2D8B46] flex items-center justify-center text-lg font-bold border border-[#2D8B46]">
                  क
                </div>
                <span>सही अक्षर, सही जगह</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C4A000] flex items-center justify-center text-lg font-bold border border-[#C4A000]">
                  म
                </div>
                <span>सही अक्षर, गलत जगह</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#2A2040] flex items-center justify-center text-lg font-bold text-gray-400 border border-[#2A2040]">
                  ल
                </div>
                <span>यह अक्षर शब्द में नहीं है</span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#3D3260] pt-3 mt-3 text-xs text-gray-500">
            <p><strong className="text-[#FFD700]">Daily</strong> — हर दिन एक नया शब्द</p>
            <p><strong className="text-[#FFD700]">अभ्यास</strong> — जितना चाहें खेलें</p>
          </div>
        </div>
      </div>
    </div>
  );
}
