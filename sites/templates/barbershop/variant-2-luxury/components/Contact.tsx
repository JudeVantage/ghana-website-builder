"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "{{BUSINESS_ADDRESS}}",
    },
    {
      icon: Phone,
      label: "Phone",
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
    <section id="contact" className="section-padding bg-luxury-card relative">
      <div className="container-luxury">
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
              Visit Our Parlour
            </h2>
            <div className="h-0.5 bg-gold w-20 mx-auto mt-6" />
          </div>
          <p className="text-xl text-luxury-text/80 max-w-2xl mx-auto mt-8 italic">
            Where excellence awaits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 luxury-card hover:border-gold/50 transition-all duration-300 group"
            >
              <div className="inline-flex p-4 border-2 border-gold/30 group-hover:border-gold mb-6 transition-all duration-300">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif font-bold text-luxury-text text-xl mb-3 uppercase tracking-wider">
                {item.label}
              </h3>
              <p className="text-luxury-text/70 leading-relaxed">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-96 overflow-hidden border-2 border-gold/30"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8091547354584!2d-0.1870!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuMyJOIDDCsDExJzEzLjIiVw!5e0!3m2!1sen!2sgh!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) invert(0.9)' }}
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
