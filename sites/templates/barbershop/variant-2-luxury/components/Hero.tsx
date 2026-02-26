"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  onBookClick: () => void;
}

const Hero = ({ onBookClick }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&h=1080&fit=crop"
          alt="Luxury Barbershop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-bg/90 via-luxury-bg/70 to-luxury-bg/90" />
        
        {/* Animated Gold Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
          />

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <span className="text-luxury-text">{{HERO_TITLE_LINE1}}</span>
            <br />
            <span className="text-gold-gradient">{{HERO_TITLE_LINE2}}</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-luxury-text/80 mb-12 max-w-3xl mx-auto font-light italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {{HERO_SUBTITLE}}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <motion.button
              onClick={onBookClick}
              className="btn-gold"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Your Seat
            </motion.button>
            <motion.a
              href="#services"
              className="btn-outline-gold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 1, delay: 1.2 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-12"
          />
        </motion.div>
      </div>

      {/* Bottom Gold Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-1 gold-gradient"
      />
    </section>
  );
};

export default Hero;
