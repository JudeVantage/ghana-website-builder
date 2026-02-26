'use client';

const signatureDishes = [
  {
    name: "Coq au Vin",
    description: "Braised chicken in red wine with pearl onions, mushrooms, and herbs",
    price: "₵180"
  },
  {
    name: "Bouillabaisse",
    description: "Traditional Provençal fish stew with saffron, fennel, and rouille",
    price: "₵220"
  },
  {
    name: "Boeuf Bourguignon",
    description: "Slow-braised beef in Burgundy wine with root vegetables",
    price: "₵195"
  },
  {
    name: "Sole Meunière",
    description: "Pan-fried Dover sole with brown butter, lemon, and capers",
    price: "₵210"
  }
];

export default function Menu() {
  return (
    <section className="bg-[#f8f7f4] py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="font-serif text-4xl md:text-6xl text-center text-[#2d2d2d] mb-16">
          Our Menu
        </h2>

        {/* Signature Dishes */}
        <div className="space-y-12 mb-16">
          {signatureDishes.map((dish, index) => (
            <div 
              key={index} 
              className="text-center border-b border-[#2d2d2d]/10 pb-12 last:border-b-0"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-[#2d2d2d] mb-3">
                {dish.name}
              </h3>
              <p className="text-[#2d2d2d]/70 text-base md:text-lg mb-4 max-w-2xl mx-auto">
                {dish.description}
              </p>
              <p className="text-[#d4af37] font-medium text-lg">
                {dish.price}
              </p>
            </div>
          ))}
        </div>

        {/* View Full Menu Link */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block border-2 border-[#2d2d2d] text-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white font-medium px-10 py-3 text-base tracking-wide transition-all duration-300"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
