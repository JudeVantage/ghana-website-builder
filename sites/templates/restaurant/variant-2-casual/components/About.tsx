"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Users, Clock, Star } from "lucide-react";
import { siteConfig } from "@/site.config";

const statIcons = [Heart, Users, Clock, Star];

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src={siteConfig.about.image}
              alt="About our restaurant"
              fill
              className="object-cover"
            />
            {/* Warm overlay accent */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-brown mb-6">
              {siteConfig.about.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {siteConfig.about.text}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.about.stats.map((stat, index) => {
                const IconComponent = statIcons[index % statIcons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-5 bg-orange-50 rounded-2xl border border-orange-100"
                  >
                    <IconComponent className="w-7 h-7 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-warm-brown mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
