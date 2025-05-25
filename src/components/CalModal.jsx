import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Clock, DollarSign, X } from "lucide-react";

export const CalModal = ({ open, onConfirm, onCancel, service }) => {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onCancel]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onCancel}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 ease-out scale-100"
            initial={{ scale: 0.9, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Icon */}
            <div className="relative p-6 pb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              {/* Close button */}
              <button
                onClick={onCancel}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                Book Your Session
              </h3>
              <div className="text-center mb-6">
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Ready to schedule your
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-200 dark:border-blue-700">
                  <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {service.title}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  session? You&apos;ll be redirected to our secure booking page.
                </p>
              </div>

              {/* Service Details */}
              {(service.duration || service.price) && (
                <div className="flex items-center justify-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                  {service.duration && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  )}
                  {service.price && (
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{service.price}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={onCancel}
                  className="flex-1 px-6 py-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Not Now
                </button>
                <button
                  onClick={onConfirm}
                  className="flex-1 px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                >
                  Book Now
                </button>
              </div>
            </div>
            {/* Bottom accent */}
            <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-2xl"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};