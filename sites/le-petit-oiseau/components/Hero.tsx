'use client';

interface HeroProps {
  onReserveClick: () => void;
}

export default function Hero({ onReserveClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80)' }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wider text-white mb-2">
            LE PETIT OISEAU
          </h1>
          <div className="h-px w-24 bg-[#d4af37] mx-auto" />
        </div>

        {/* Main Headline */}
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-white mb-8 leading-tight">
          French-Inspired Dining<br />in the Heart of Accra
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-white/90 font-light italic mb-12 max-w-2xl mx-auto">
          "Where tradition meets innovation in every exquisite dish"
        </p>

        {/* CTA Button */}
        <button
          onClick={onReserveClick}
          className="bg-[#d4af37] hover:bg-[#c5a028] text-black font-medium px-12 py-4 text-lg tracking-wide transition-all duration-300 transform hover:scale-105"
        >
          Reserve Table
        </button>
      </div>
    </section>
  );
}
