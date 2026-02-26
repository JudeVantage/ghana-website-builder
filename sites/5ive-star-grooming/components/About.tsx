"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-900 to-black relative">
      {/* Kente Border Top */}
      <div className="absolute top-0 left-0 right-0 kente-border"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">5IVE STAR GROOMING</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Welcome to <span className="text-gold font-semibold">5IVE STAR GROOMING</span>, where 
                <span className="text-gold"> Ghana&apos;s rich heritage</span> meets world-class grooming excellence. 
                Located opposite UPSA in East Legon, we&apos;re proud to be Ghana&apos;s premier destination 
                for gentlemen who demand nothing but the best.
              </p>
              
              <p>
                Inspired by Ghana&apos;s <span className="text-gold font-semibold">Black Star legacy</span>, 
                we embody the same spirit of excellence and pride that defines our nation. 
                Our master barbers bring over a decade of experience, combining classic barbering 
                techniques with modern styling trends, all while honoring our cultural roots.
              </p>
              
              <p>
                With a stellar 4.8-star rating from over 40 satisfied clients, we&apos;ve built our 
                reputation on consistency, quality, and an unwavering commitment to customer 
                satisfaction. When you step into our shop, you&apos;re not just getting a haircut—
                you&apos;re experiencing a piece of <span className="text-gold font-semibold">Ghanaian excellence</span>.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-gold fill-current" />
                  <span className="text-white font-semibold">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-gold fill-current" />
                  <span className="text-white font-semibold">Expert Barbers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-gold fill-current" />
                  <span className="text-white font-semibold">Premium Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-gold fill-current" />
                  <span className="text-white font-semibold">Proudly Ghanaian 🇬🇭</span>
                </div>
              </div>
            </div>

            <motion.a
              href="#contact"
              className="inline-block mt-8 bg-gold text-black px-8 py-4 rounded-full font-bold hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Us Today
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden border-4 border-gold/20">
              <Image
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=1000&fit=crop"
                alt="5IVE STAR GROOMING Interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Proudly Ghanaian Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-6 right-6 bg-gold text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg"
              >
                <Star className="w-4 h-4 fill-current" />
                Proudly Ghanaian
              </motion.div>
            </div>
            
            {/* Decorative Elements with Kente Colors */}
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 border-4 border-gold rounded-2xl -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-bronze rounded-full -z-10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Kente Border Bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 kente-border"
      />
    </section>
  );
};

export default About;
