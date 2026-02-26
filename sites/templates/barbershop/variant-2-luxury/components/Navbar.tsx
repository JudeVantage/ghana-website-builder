"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onBookClick: () => void;
}

const Navbar = ({ onBookClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#services", label: "SERVICES" },
    { href: "#about", label: "ABOUT" },
    { href: "#gallery", label: "GALLERY" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-luxury-bg/95 backdrop-blur-md shadow-lg shadow-gold/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container-luxury flex items-center justify-between px-4">
        <a href="#home" className="text-2xl font-serif font-bold text-gold">
          {{BUSINESS_NAME}}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-luxury-text hover:text-gold transition-colors duration-300 font-medium tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <button onClick={onBookClick} className="btn-gold">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gold hover:text-gold-light transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-luxury-card shadow-xl overflow-hidden border-t border-gold/20"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-luxury-text hover:text-gold transition-colors duration-300 font-medium text-lg tracking-wider"
                >
                  {link.label}
                </a>
              ))}
              <button onClick={onBookClick} className="btn-gold w-full mt-2">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
