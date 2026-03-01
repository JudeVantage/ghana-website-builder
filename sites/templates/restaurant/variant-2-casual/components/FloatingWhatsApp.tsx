"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/site.config";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const message = siteConfig.whatsapp.floatingMessage;
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-lg hidden group-hover:block"
      >
        Hi, I&apos;d like to make a reservation
      </motion.span>
    </motion.button>
  );
};

export default FloatingWhatsApp;
