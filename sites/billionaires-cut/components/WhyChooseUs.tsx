"use client";

import { motion } from "framer-motion";
import { Shield, Star, Clock, Heart } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Star,
      title: "Expert Barbers",
      description: "Our master barbers have over 10+ years of experience in precision cutting and styling.",
    },
    {
      icon: Shield,
      title: "Premium Products",
      description: "We use only the finest grooming products from top international brands.",
    },
    {
      icon: Clock,
      title: "No Wait Time",
      description: "Book your appointment and walk in at your scheduled time. Your time is valuable.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "5.0★ rating from 63+ satisfied customers speaks to our commitment to excellence.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Billionaire's Cut</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the difference that sets us apart from the rest
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <motion.div
                className="bg-gradient-to-br from-gold/20 to-gold/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <reason.icon className="w-10 h-10 text-gold" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="tel:+233544191868"
            className="inline-block bg-gold text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/30"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Experience Excellence Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
