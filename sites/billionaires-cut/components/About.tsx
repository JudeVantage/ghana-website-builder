"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Billionaire's Cut</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Welcome to Billionaire's Cut, where luxury meets tradition in the heart of Accra. 
                Located on Adjiringano Road, we've established ourselves as the premier destination 
                for gentlemen who demand excellence in grooming.
              </p>
              
              <p>
                Our master barbers bring over a decade of experience, combining classic barbering 
                techniques with modern styling trends. Every service is delivered with meticulous 
                attention to detail, ensuring you leave looking and feeling your absolute best.
              </p>
              
              <p>
                With a perfect 5.0-star rating from over 63 satisfied clients, we've built our 
                reputation on consistency, quality, and an unwavering commitment to customer 
                satisfaction. When you step into our shop, you're not just getting a haircut—
                you're experiencing a lifestyle.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                  <span className="text-white font-semibold">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                  <span className="text-white font-semibold">Expert Barbers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                  <span className="text-white font-semibold">Premium Products</span>
                </div>
              </div>
            </div>

            <motion.a
              href="#contact"
              className="inline-block mt-8 bg-gold text-black px-8 py-4 rounded-full font-bold hover:bg-gold-light transition-all duration-300"
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
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=1000&fit=crop"
                alt="Billionaire's Cut Interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 border-4 border-gold rounded-2xl -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-gold/50 rounded-full -z-10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
