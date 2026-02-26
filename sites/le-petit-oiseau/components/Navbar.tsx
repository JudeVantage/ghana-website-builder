'use client';

import { useState, useEffect } from 'react';

interface NavbarProps {
  onReserveClick: () => void;
}

export default function Navbar({ onReserveClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-xl md:text-2xl text-white tracking-wider">
          LE PETIT OISEAU
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-white/80 hover:text-white text-sm tracking-wide transition-colors"
          >
            About
          </a>
          <a
            href="#menu"
            className="text-white/80 hover:text-white text-sm tracking-wide transition-colors"
          >
            Menu
          </a>
          <a
            href="#gallery"
            className="text-white/80 hover:text-white text-sm tracking-wide transition-colors"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-white/80 hover:text-white text-sm tracking-wide transition-colors"
          >
            Contact
          </a>
          <button
            onClick={onReserveClick}
            className="bg-[#d4af37] hover:bg-[#c5a028] text-black font-medium px-6 py-2 text-sm tracking-wide transition-all duration-300"
          >
            Reserve
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={onReserveClick}
          className="md:hidden bg-[#d4af37] hover:bg-[#c5a028] text-black font-medium px-5 py-2 text-sm tracking-wide transition-all duration-300"
        >
          Reserve
        </button>
      </div>
    </nav>
  );
}
