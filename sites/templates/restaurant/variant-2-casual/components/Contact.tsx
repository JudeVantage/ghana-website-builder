"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { siteConfig } from "@/site.config";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.contact.address,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.contact.phone,
    },
    {
      icon: Clock,
      label: "Hours",
      value: siteConfig.contact.hours,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contact.email,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-[#FFF8F0]">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-brown mb-4">
            {siteConfig.contact.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {siteConfig.contact.sectionSubtitle}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100"
            >
              <div className="inline-flex p-4 bg-orange-50 rounded-full mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-2 text-lg">
                {item.label}
              </h3>
              <p className="text-gray-600">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-80 md:h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            src={siteConfig.contact.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
