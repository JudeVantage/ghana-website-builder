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
    <section id="services" className="section-padding bg-white relative">
      {/* Decorative Stripes */}
      <div className="absolute top-0 left-0 right-0 h-1 barber-stripe" />
      
      <div className="container-classic">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-barber-red uppercase mb-4 text-shadow-classic">
            Our Services
          </h2>
          <div className="w-32 h-1 bg-barber-red mx-auto mb-4" />
          <p className="text-xl text-barber-brown font-bold uppercase tracking-wide">
            Traditional Cuts • Modern Style
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="vintage-card p-8 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="p-5 bg-barber-red text-white group-hover:bg-barber-brown transition-colors">
                  <service.icon size={36} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-barber-brown mb-3 uppercase">
                    {service.name}
                  </h3>
                  <p className="text-barber-darkbrown mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center gap-3">
                    <div className="h-1 bg-barber-red w-12" />
                    <p className="text-3xl font-bold text-barber-red">{service.price}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-barber-red text-white text-center py-6 px-8 shadow-xl"
        >
          <p className="text-2xl font-bold uppercase tracking-wider">
            Walk-Ins Welcome • Call Ahead for Groups
          </p>
        </motion.div>
      </div>
      
      {/* Decorative Stripes */}
      <div className="absolute bottom-0 left-0 right-0 h-1 barber-stripe" />
    </section>
  );
};

export default Services;
