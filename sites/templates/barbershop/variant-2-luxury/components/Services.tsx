"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  name: string;
  description: string;
  price: string;
}

interface ServicesProps {
  services: Service[];
}

const Services = ({ services }: ServicesProps) => {
  return (
    <section id="services" className="section-padding bg-luxury-bg relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #D4AF37 2px, #D4AF37 4px)`,
        }} />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block">
            <div className="h-0.5 bg-gold w-20 mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gold mb-4">
              Premium Services
            </h2>
            <div className="h-0.5 bg-gold w-20 mx-auto mt-6" />
          </div>
          <p className="text-xl text-luxury-text/80 max-w-2xl mx-auto mt-8 italic">
            Experience grooming redefined
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="luxury-card p-8 hover:border-gold/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-gold/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className="p-4 border-2 border-gold/30 group-hover:border-gold transition-all duration-300">
                    <service.icon size={36} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-luxury-text mb-3 group-hover:text-gold transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-luxury-text/70 mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="h-px bg-gold/30 flex-1" />
                      <p className="text-3xl font-serif font-bold text-gold">{service.price}</p>
                      <div className="h-px bg-gold/30 flex-1" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
