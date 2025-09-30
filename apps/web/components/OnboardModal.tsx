export default function OnboardModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fadein">
      <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl max-w-md w-full text-center border-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-4 text-white">Welcome to HOTMESS</h2>
        <p className="text-gray-300 mb-6">
          Experience the finest in luxury underground radio. Where chaos meets class.
        </p>
        <button
          onClick={onClose}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
