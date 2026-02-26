"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="section-padding bg-luxury-card relative">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="h-0.5 bg-gold w-20 mb-6" />
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gold mb-6">
                The Art of Grooming
              </h2>
              <div className="h-0.5 bg-gold w-20 mt-6" />
            </div>
            
            <div className="space-y-6 text-luxury-text/80 text-lg leading-relaxed">
              {{ABOUT_TEXT}}
            </div>

            {/* Signature */}
            <div className="mt-12">
              <div className="text-gold font-serif text-3xl mb-2">{{OWNER_NAME}}</div>
              <div className="text-luxury-text/60 italic">Master Barber & Founder</div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative h-64 overflow-hidden border-2 border-gold/30">
                <Image
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=400&fit=crop"
                  alt="Luxury Barbershop Interior"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 overflow-hidden border-2 border-gold/30">
                <Image
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=500&fit=crop"
                  alt="Professional Service"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="relative h-80 overflow-hidden border-2 border-gold/30">
                <Image
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=500&fit=crop"
                  alt="Premium Products"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 overflow-hidden border-2 border-gold/30">
                <Image
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=400&fit=crop"
                  alt="Attention to Detail"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
