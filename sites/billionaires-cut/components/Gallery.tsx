"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop",
      alt: "Modern haircut styling",
    },
    {
      url: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop",
      alt: "Professional beard trim",
    },
    {
      url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop",
      alt: "Luxury barbershop interior",
    },
    {
      url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop",
      alt: "Classic straight razor shave",
    },
    {
      url: "https://images.unsplash.com/photo-1598523043573-ee4a0c1c5d1d?w=800&h=600&fit=crop",
      alt: "Precision haircut in progress",
    },
    {
      url: "https://images.unsplash.com/photo-1593702288056-7927b442d0fa?w=800&h=600&fit=crop",
      alt: "Premium grooming products",
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Take a look at our craftsmanship and the luxury experience we provide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 transition-all duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-lg">
            Follow us on Instagram{" "}
            <a
              href="https://instagram.com/billionairescut"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors duration-300 font-semibold"
            >
              @billionairescut
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
