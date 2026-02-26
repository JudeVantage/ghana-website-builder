"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
  phoneNumber: string;
}

const FloatingWhatsApp = ({ phoneNumber }: FloatingWhatsAppProps) => {
  const handleClick = () => {
    const message = "Hey! I want to book a haircut.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-5 shadow-2xl hover:bg-green-600 transition-colors group border-4 border-white"
    >
      <MessageCircle size={32} />
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-barber-red text-white px-6 py-3 whitespace-nowrap font-bold uppercase shadow-xl hidden group-hover:block border-4 border-white"
      >
        Text Us!
      </motion.span>
    </motion.button>
  );
};

export default FloatingWhatsApp;
