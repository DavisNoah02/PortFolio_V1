import { FaTimes } from "react-icons/fa";

export function WelcomeModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="bg-[#10182b] rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden border border-[#1d2b4c] pointer-events-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-700 via-blue-800 to-purple-900 px-6 py-6 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Welcome to My Portfolio!</h2>
          <button
                className="text-white hover:bg-white hover:bg-opacity-20 hover:text-cyan-400 rounded-full p-1 transition-all duration-200 scale-100 hover:scale-110 active:scale-95"
                onClick={onClose}
                aria-label="Close"
                >
                <FaTimes size={20} />
            </button>
        </div>
        {/* Subheading */}
        <div className="px-6 pt-4 pb-2">
          <p className="text-lg text-cyan-400 font-semibold mb-2">Thank you for visiting my professional space.</p>
          <p className="text-gray-200 mb-3">
            I'm Noah D. Munene, a passionate Full Stack Web Developer based in Nairobi. I help businesses and individuals build modern, scalable web solutions.
          </p>
          <p className="text-gray-300 mb-6">
            Feel free to explore my work and reach out for collaborations, projects, or just to say hi!
          </p>
          <div className="flex justify-end">
            <button
              className="bg-gradient-to-r from-cyan-700 via-blue-800 to-purple-900 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-blue-800 hover:to-cyan-700 transition hover:cursor-pointer"
              onClick={onClose}
            >
              Explore My Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}