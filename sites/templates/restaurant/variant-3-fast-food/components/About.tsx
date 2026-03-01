"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/site.config";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="section-padding section-dark relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-1/2 left-0 w-1 h-48 bg-gradient-to-b from-transparent via-primary to-transparent -translate-y-1/2 hidden lg:block" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={about.image}
                alt="About our restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Red accent overlay on corner */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/40 to-transparent" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/30 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
              About Us
            </span>
            <h2 className="heading-display text-4xl md:text-5xl text-white mb-6">
              {about.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              {about.text}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {about.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-dark-200 border border-dark-300 rounded-lg p-5 text-center group hover:border-accent/40 transition-all duration-300"
                >
                  <div className="font-display font-bold text-3xl md:text-4xl text-accent text-glow-yellow mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
