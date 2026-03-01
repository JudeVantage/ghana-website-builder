"use client";

import { useState, useEffect } from "react";
import { Menu, X, Utensils } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/site.config";

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
    { href: "#home", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF8F0] shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4">
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-display font-bold text-primary"
        >
          <Utensils className="w-7 h-7" />
          {siteConfig.businessName}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-orange-200"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button onClick={onBookClick} className="btn-casual">
            {siteConfig.hero.ctaPrimary}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden ${
            scrolled ? "text-gray-700" : "text-white"
          } hover:text-primary`}
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
            className="md:hidden bg-[#FFF8F0] shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-lg"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  onBookClick();
                  setIsOpen(false);
                }}
                className="btn-casual w-full mt-2"
              >
                {siteConfig.hero.ctaPrimary}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
