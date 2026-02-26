'use client';

export default function About() {
  return (
    <section className="bg-[#f8f7f4] py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main Headline */}
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-[#2d2d2d] mb-12 leading-tight">
          AN ICONIC RESTAURANT<br />IN THE HEART OF OSU
        </h2>

        {/* Quote */}
        <blockquote className="text-xl md:text-2xl italic text-[#2d2d2d]/80 mb-12 font-light">
          "This isn't just a French restaurant, it's an Accra institution"
        </blockquote>
        <p className="text-sm text-[#2d2d2d]/60 mb-16">
          – Ghana Food Guide
        </p>

        {/* Body Copy */}
        <div className="space-y-6 text-[#2d2d2d] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          <p>
            Set in the vibrant heart of Osu, within walking distance of the city's cultural landmarks, 
            Le Petit Oiseau has been at the epicentre of Accra's fine dining scene since its founding.
          </p>
          <p>
            Our kitchen celebrates the timeless elegance of French cuisine while embracing the bold 
            flavors of West Africa, creating an unforgettable culinary experience that honors both traditions.
          </p>
          <p>
            Every dish is crafted with meticulous attention to detail, using the finest local and 
            imported ingredients to deliver an authentic taste of French gastronomy with a distinctly Ghanaian soul.
          </p>
        </div>
      </div>
    </section>
  );
}
