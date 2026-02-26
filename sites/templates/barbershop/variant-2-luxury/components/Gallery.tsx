"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&h=600&fit=crop",
  ];

  return (
    <section id="gallery" className="section-padding bg-luxury-bg relative overflow-hidden">
      {/* Gold Lines Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 100px, #D4AF37 100px, #D4AF37 101px)`,
        }} />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block">
            <div className="h-0.5 bg-gold w-20 mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gold mb-4">
              Portfolio
            </h2>
            <div className="h-0.5 bg-gold w-20 mx-auto mt-6" />
          </div>
          <p className="text-xl text-luxury-text/80 max-w-2xl mx-auto mt-8 italic">
            Masterpieces in every cut
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative aspect-square overflow-hidden border-2 border-gold/20 hover:border-gold transition-all duration-500 group cursor-pointer"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/50 to-transparent flex items-end p-6"
              >
                <div className="text-gold font-serif text-lg">Work #{index + 1}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
