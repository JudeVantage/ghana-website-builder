"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Signature Cut", href: "#services" },
      { name: "Royal Shave", href: "#services" },
      { name: "Beard Sculpting", href: "#services" },
      { name: "VIP Experience", href: "#services" },
      { name: "Black Star Special", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Gallery", href: "#gallery" },
      { name: "Contact", href: "#contact" },
      { name: "Book Now", href: "tel:+233506436174" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gold/20 relative">
      {/* Kente Border Top */}
      <div className="absolute top-0 left-0 right-0 kente-border"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/images/5star-logo.png" 
                alt="5IVE STAR GROOMING" 
                width={60} 
                height={60}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gradient block mb-3">5IVE STAR GROOMING</span>
            <p className="text-gray-400 mb-4">
              East Legon&apos;s premier barbershop where 5-star service meets Ghanaian excellence
            </p>
            <div className="flex items-center gap-2 text-gold">
              <span className="text-2xl font-bold">4.8</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-1">40 reviews</p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name} className="flex items-center gap-2">
                  <Star className="w-3 h-3 text-gold fill-current" />
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400 mb-6">
              <p>Opposite UPSA</p>
              <p>Trinity Baptist Church</p>
              <p>East Legon, Accra</p>
              <p className="flex items-center gap-2 text-gold font-semibold">
                <span>🇬🇭</span> Proudly Ghanaian
              </p>
              <a
                href="tel:+233506436174"
                className="block hover:text-gold transition-colors duration-300 font-semibold"
              >
                +233 50 643 6174
              </a>
              <a
                href="https://wa.me/233506436174"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold transition-colors duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-8 border-t border-gold/10 text-center text-gray-500"
        >
          <p className="flex items-center justify-center gap-2">
            © {currentYear} 5IVE STAR GROOMING. All rights reserved. 
            <span className="text-gold">★</span> 
            Crafted with excellence in Ghana
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
