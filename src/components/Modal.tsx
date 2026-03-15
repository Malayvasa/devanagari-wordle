interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Modal content */}
      <div
        className="relative bg-gray-900 border border-gray-700 rounded-xl max-w-md w-full p-6 text-white shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">कैसे खेलें</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3 text-sm text-gray-300">
          <p>
            <span className="text-white font-semibold">देवनागरी वर्डल</span> में आपको
            5 syllable का एक हिंदी शब्द 6 प्रयासों में खोजना है।
          </p>

          <div className="border-t border-gray-700 pt-3">
            <p className="font-semibold text-white mb-2">नियम:</p>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>हर घर में <strong>मात्राएं</strong> पहले से दिखती हैं (hint के रूप में)</li>
              <li>आपको केवल <strong>व्यंजन</strong> (consonants) टाइप करने हैं</li>
              <li>हर अनुमान के बाद टाइलें रंग बदलती हैं</li>
            </ul>
          </div>

          <div className="border-t border-gray-700 pt-3">
            <p className="font-semibold text-white mb-2">रंगों का अर्थ:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-lg font-bold flex-shrink-0">
                  क
                </div>
                <p>सही व्यंजन, <strong>सही जगह</strong></p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500 rounded flex items-center justify-center text-lg font-bold flex-shrink-0">
                  म
                </div>
                <p>सही व्यंजन, <strong>गलत जगह</strong></p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center text-lg font-bold flex-shrink-0">
                  ज
                </div>
                <p>व्यंजन शब्द में <strong>नहीं है</strong></p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-3">
            <p className="text-center text-gray-400 text-xs">
              Daily mode में हर दिन नया शब्द आता है।
              Practice mode में जितना चाहें खेलें!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
