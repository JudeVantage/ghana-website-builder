'use client';

export default function Footer() {
  return (
    <footer className="bg-[#000000] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl text-white tracking-wider">
            LE PETIT OISEAU
          </h2>
          <div className="h-px w-16 bg-[#d4af37] mx-auto mt-3" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-white/70">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#menu" className="hover:text-white transition-colors">
            Menu
          </a>
          <a href="#gallery" className="hover:text-white transition-colors">
            Gallery
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a href="#reservations" className="hover:text-white transition-colors">
            Reservations
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Le Petit Oiseau. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
