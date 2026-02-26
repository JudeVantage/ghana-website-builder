"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Opposite UPSA", "Trinity Baptist Church", "East Legon, Accra"],
      link: "https://maps.google.com/?q=5IVE+STAR+GROOMING+East+Legon+Accra",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+233 50 643 6174"],
      link: "tel:+233506436174",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Sat: 9AM - 8PM", "Sunday: 10AM - 6PM"],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-black relative">
      {/* Kente Border Top */}
      <div className="absolute top-0 left-0 right-0 kente-border"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Visit us or reach out to book your appointment today
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <motion.div
                className="bg-gradient-to-br from-gold/20 to-gold/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <info.icon className="w-8 h-8 text-gold" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
              
              {info.link ? (
                <a
                  href={info.link}
                  target={info.icon === MapPin ? "_blank" : undefined}
                  rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  {info.details.map((detail, i) => (
                    <div key={i}>{detail}</div>
                  ))}
                </a>
              ) : (
                <div className="text-gray-400">
                  {info.details.map((detail, i) => (
                    <div key={i}>{detail}</div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-black border border-gold/20 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready for <span className="text-gradient">5-Star Service</span>?
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Book your appointment now and experience Black Star grooming excellence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+233506436174"
                className="bg-gold text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/30"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(212, 175, 55, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Call to Book
              </motion.a>
              <motion.a
                href="https://wa.me/233506436174"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gold text-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-gold hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp Us
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 rounded-2xl overflow-hidden h-96 border-2 border-gold/20"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7!2d-0.1870!3d5.6500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzknMDAuMCJOIDDCsDExJzEzLjIiVw!5e0!3m2!1sen!2sgh!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
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

export default Contact;
