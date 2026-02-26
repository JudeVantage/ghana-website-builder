"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=500&h=500&fit=crop",
  ];

  return (
    <section id="gallery" className="section-padding bg-white relative">
      {/* Top Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 barber-stripe" />
      
      <div className="container-classic">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-barber-red uppercase mb-4 text-shadow-classic">
            Our Work
          </h2>
          <div className="w-32 h-1 bg-barber-red mx-auto mb-4" />
          <p className="text-xl text-barber-brown font-bold uppercase tracking-wide">
            Fresh Cuts Every Day
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="vintage-card p-3 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Red overlay on hover */}
                <div className="absolute inset-0 bg-barber-red opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 vintage-card p-8 text-center bg-barber-cream"
        >
          <h3 className="text-3xl font-display font-bold text-barber-red uppercase mb-4">
            Ready for Your Next Cut?
          </h3>
          <p className="text-xl text-barber-brown mb-6 font-bold">
            Visit us today or book your appointment
          </p>
          <div className="flex gap-4 justify-center">
            <div className="bg-barber-red text-white px-6 py-3 font-bold uppercase">
              Walk-Ins Welcome
            </div>
            <div className="bg-barber-brown text-white px-6 py-3 font-bold uppercase">
              Call: {{BUSINESS_PHONE}}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 barber-stripe" />
    </section>
  );
};

export default Gallery;
