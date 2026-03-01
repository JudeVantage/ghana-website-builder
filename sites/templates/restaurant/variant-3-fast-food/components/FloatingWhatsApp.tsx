"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/site.config";

export default function FloatingWhatsApp() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleClick = () => {
    const message = encodeURIComponent(siteConfig.whatsapp.floatingMessage);
    const phone = siteConfig.whatsapp.phoneNumber.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-3 bg-white text-dark rounded-lg shadow-2xl p-4 min-w-[220px]"
          >
            <button
              onClick={() => setIsTooltipVisible(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Close tooltip"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-sm font-medium text-dark pr-4 mb-3">
              {siteConfig.whatsapp.floatingMessage}
            </p>
            <button
              onClick={handleClick}
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Start Chat
            </button>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 shadow-lg" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        onClick={() => setIsTooltipVisible(!isTooltipVisible)}
        className="w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
      </motion.button>

      {/* Pulse ring */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
        className="absolute inset-0 w-16 h-16 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none"
      />
    </div>
  );
}
