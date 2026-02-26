"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "{{BUSINESS_ADDRESS}}",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "{{BUSINESS_PHONE}}",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "{{BUSINESS_HOURS}}",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@{{BUSINESS_NAME_LOWER}}.com",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-barber-cream">
      <div className="container-classic">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-barber-red uppercase mb-4 text-shadow-classic">
            Visit Us
          </h2>
          <div className="w-32 h-1 bg-barber-red mx-auto mb-4" />
          <p className="text-xl text-barber-brown font-bold uppercase tracking-wide">
            Stop By Anytime
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="vintage-card p-8 text-center hover:-translate-y-2 transition-all duration-300"
            >
              <div className="inline-flex p-5 bg-barber-red text-white mb-4">
                <item.icon size={32} />
              </div>
              <h3 className="font-bold text-barber-brown text-lg uppercase mb-3">{item.label}</h3>
              <p className="text-barber-darkbrown font-medium">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="vintage-card p-4"
        >
          <div className="h-96 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8091547354584!2d-0.1870!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuMyJOIDDCsDExJzEzLjIiVw!5e0!3m2!1sen!2sgh!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
