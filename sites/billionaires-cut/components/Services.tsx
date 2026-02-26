"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Ruler, Crown } from "lucide-react";

interface ServicesProps {
  onBookClick?: () => void;
}

const Services = ({ onBookClick }: ServicesProps) => {
  const services = [
    {
      icon: Scissors,
      title: "Signature Cut",
      description: "Premium haircut with hot towel treatment and styling",
      price: "GH₵ 80",
      features: ["Consultation", "Precision Cut", "Hot Towel", "Styling"],
    },
    {
      icon: Sparkles,
      title: "Royal Shave",
      description: "Traditional hot towel shave with premium products",
      price: "GH₵ 60",
      features: ["Hot Towel Prep", "Traditional Shave", "Face Massage", "Aftercare"],
    },
    {
      icon: Ruler,
      title: "Beard Sculpting",
      description: "Expert beard trim and shaping to perfection",
      price: "GH₵ 50",
      features: ["Beard Design", "Precision Trim", "Line Up", "Conditioning"],
    },
    {
      icon: Crown,
      title: "VIP Experience",
      description: "The complete package for the modern gentleman",
      price: "GH₵ 180",
      features: ["Haircut", "Shave", "Beard Trim", "Face Treatment"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from our range of premium grooming services designed for the modern gentleman
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(212, 175, 55, 0.2)" }}
              className="bg-gradient-to-b from-gray-900 to-black border border-gold/20 rounded-2xl p-6 hover:border-gold/50 transition-all duration-300"
            >
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              <div className="text-3xl font-bold text-gradient mb-4">{service.price}</div>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={onBookClick}
                className="mt-6 w-full text-center bg-gold/10 hover:bg-gold hover:text-black text-gold py-3 rounded-full font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
