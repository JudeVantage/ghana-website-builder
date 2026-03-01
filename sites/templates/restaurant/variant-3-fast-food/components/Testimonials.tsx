"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/site.config";

export default function Testimonials() {
  const { testimonials } = siteConfig;

  return (
    <section className="section-padding section-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent rounded-full blur-[100px]" />
      </div>

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
            Testimonials
          </span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            {testimonials.sectionTitle}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {testimonials.sectionSubtitle}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-dark p-8 relative group hover:border-primary/40 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-20 h-20 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-display font-bold text-white">
                  {testimonial.name}
                </span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700 rounded-b-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
