"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/site.config";

export default function Contact() {
  const { contact } = siteConfig;

  const contactInfo = [
    { icon: MapPin, label: "Address", value: contact.address },
    { icon: Phone, label: "Phone", value: contact.phone },
    { icon: Mail, label: "Email", value: contact.email },
    { icon: Clock, label: "Hours", value: contact.hours },
  ];

  return (
    <section id="contact" className="section-padding section-dark-alt relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Location
          </span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            {contact.sectionTitle}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {contact.sectionSubtitle}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-dark-hover p-6 flex items-center gap-5"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                      {info.label}
                    </div>
                    <div className="text-white font-medium text-lg">
                      {info.value}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-lg overflow-hidden border-2 border-dark-300 hover:border-primary/40 transition-all duration-500"
          >
            <iframe
              src={contact.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant location map"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
