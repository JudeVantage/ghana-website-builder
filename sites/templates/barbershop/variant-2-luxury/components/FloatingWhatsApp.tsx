"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
  phoneNumber: string;
}

const FloatingWhatsApp = ({ phoneNumber }: FloatingWhatsAppProps) => {
  const handleClick = () => {
    const message = "Hello! I'm interested in your luxury grooming services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-40 bg-gold text-luxury-bg p-5 shadow-2xl shadow-gold/50 hover:shadow-gold/70 transition-all group border-2 border-gold-light"
    >
      <MessageCircle size={28} />
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-luxury-card border-2 border-gold/30 text-luxury-text px-6 py-3 whitespace-nowrap text-sm font-medium shadow-xl hidden group-hover:block"
      >
        Message Us
      </motion.span>
    </motion.button>
  );
};

export default FloatingWhatsApp;
