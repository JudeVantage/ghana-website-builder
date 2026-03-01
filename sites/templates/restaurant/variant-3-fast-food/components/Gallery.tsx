"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/site.config";

export default function Gallery() {
  const { gallery } = siteConfig;

  return (
    <section id="gallery" className="section-padding section-dark-alt relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Gallery
          </span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            {gallery.sectionTitle}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {gallery.sectionSubtitle}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </motion.div>

        {/* Gallery Grid - 2x4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {gallery.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative aspect-square rounded-lg overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-red-500/20 cursor-pointer"
            >
              <Image
                src={image}
                alt={`Food gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Corner accent on hover */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[3px] border-l-[3px] border-accent transition-all duration-500 group-hover:w-8 group-hover:h-8 rounded-tl" />
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[3px] border-r-[3px] border-primary transition-all duration-500 group-hover:w-8 group-hover:h-8 rounded-br" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
