"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { siteConfig } from "@/site.config";

const Contact = () => {
  const { contact } = siteConfig;

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: contact.address,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
    },
    {
      icon: Clock,
      label: "Hours",
      value: contact.hours,
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-neutral-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            {contact.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {contact.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-gray-900 mb-2">
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
          className="mt-12 h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            src={contact.mapEmbedUrl}
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
