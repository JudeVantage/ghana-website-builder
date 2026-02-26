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
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional grooming services tailored to your style
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
              className="bg-neutral-light p-8 rounded-xl hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon size={32} className="text-primary group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
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
