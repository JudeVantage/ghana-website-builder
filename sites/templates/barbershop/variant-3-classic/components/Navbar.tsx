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
    <>
      {/* Barber Pole Stripe */}
      <div className="fixed top-0 left-0 right-0 h-2 barber-stripe z-50" />
      
      <nav
        className={`fixed top-2 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg py-3" : "bg-classic-bg/95 py-4"
        }`}
      >
        <div className="container-classic flex items-center justify-between px-4">
          <a href="#home" className="text-3xl font-display font-bold text-barber-red uppercase tracking-wider text-shadow-classic">
            {{BUSINESS_NAME}}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-barber-brown hover:text-barber-red transition-colors duration-300 font-bold uppercase tracking-wide text-sm"
              >
                {link.label}
              </a>
            ))}
            <button onClick={onBookClick} className="btn-barber">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-barber-red hover:text-red-700 transition-colors"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white shadow-xl overflow-hidden border-t-4 border-barber-red"
            >
              <div className="flex flex-col gap-4 px-4 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-barber-brown hover:text-barber-red transition-colors duration-300 font-bold text-lg uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                ))}
                <button onClick={onBookClick} className="btn-barber w-full mt-2">
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
