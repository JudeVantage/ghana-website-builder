"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/site.config";

interface HeroProps {
  onReserveClick: () => void;
}

const Hero = ({ onReserveClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-neutral-light pt-20"
    >
      <div className="container-custom px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-gray-900 leading-tight whitespace-pre-line">
            {siteConfig.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={onReserveClick}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {siteConfig.hero.ctaPrimary}
            </motion.button>
            <motion.a
              href="#menu"
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {siteConfig.hero.ctaSecondary}
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src={siteConfig.hero.backgroundImage}
            alt={siteConfig.businessName}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;
