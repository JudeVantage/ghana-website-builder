'use client';

interface ReservationsProps {
  onBookNowClick: () => void;
}

export default function Reservations({ onBookNowClick }: ReservationsProps) {
  return (
    <section className="bg-[#1a1a1a] py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Opening Hours */}
        <div className="mb-12">
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-8">
            Opening Hours
          </h3>
          
          <div className="space-y-4 text-white/90 text-base md:text-lg">
            <div>
              <p className="font-medium text-white">Tuesday – Saturday</p>
              <p className="text-white/70">Lunch – 12pm – 3pm (last orders)</p>
              <p className="text-white/70">Dinner – 5pm – 10.30pm (last orders)</p>
            </div>
            
            <div className="pt-4">
              <p className="font-medium text-white">Sunday</p>
              <p className="text-white/70">Lunch – 12pm – 3.30pm (last orders)</p>
              <p className="text-white/70">Dinner – Closed</p>
            </div>
            
            <div className="pt-4">
              <p className="text-white/70">Closed on Mondays</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onBookNowClick}
          className="bg-[#d4af37] hover:bg-[#c5a028] text-black font-medium px-12 py-4 text-lg tracking-wide transition-all duration-300 transform hover:scale-105"
        >
          Book Now
        </button>
      </div>
    </section>
  );
}
