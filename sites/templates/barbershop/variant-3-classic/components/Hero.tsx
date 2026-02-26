"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Scissors } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
}

const Hero = ({ onBookClick }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-barber-cream pt-24">
      <div className="container-classic px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-3 bg-barber-red text-white px-6 py-3 mb-8 shadow-lg"
            >
              <Scissors size={24} />
              <span className="font-bold uppercase tracking-wider">EST. 2010</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 uppercase leading-tight">
              <span className="text-barber-red text-shadow-classic">{{HERO_TITLE_LINE1}}</span>
              <br />
              <span className="text-barber-brown text-shadow-classic">{{HERO_TITLE_LINE2}}</span>
            </h1>

            <p className="text-2xl text-barber-darkbrown mb-8 font-bold">
              {{HERO_SUBTITLE}}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={onBookClick}
                className="btn-barber"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Cut
              </motion.button>
              <motion.a
                href="#services"
                className="btn-outline-barber"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                See Services
              </motion.a>
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="bg-barber-red text-white px-4 py-2 font-bold uppercase text-sm">
                ★ 4.9 Rating
              </div>
              <div className="bg-barber-brown text-white px-4 py-2 font-bold uppercase text-sm">
                1000+ Cuts
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="vintage-card p-4">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=800&fit=crop"
                  alt="Classic Barbershop"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Decorative Corner Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-8 border-l-8 border-barber-red" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-8 border-r-8 border-barber-red" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-3 barber-stripe" />
    </section>
  );
};

export default Hero;
