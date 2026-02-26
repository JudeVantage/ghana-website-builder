"use client";

import { motion } from "framer-motion";
import { Scissors, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Signature Cut", href: "#services" },
      { name: "Royal Shave", href: "#services" },
      { name: "Beard Sculpting", href: "#services" },
      { name: "VIP Experience", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Gallery", href: "#gallery" },
      { name: "Contact", href: "#contact" },
      { name: "Book Now", href: "tel:+233544191868" },
    ],
    social: [
      { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/billionairescutgh" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-8 h-8 text-gold" />
              <span className="text-2xl font-bold text-gradient">Billionaire's Cut</span>
            </div>
            <p className="text-gray-400 mb-4">
              Accra's premier barbershop where luxury meets tradition
            </p>
            <div className="flex items-center gap-2 text-gold">
              <span className="text-2xl font-bold">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-1">63 reviews</p>
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

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400 mb-6">
              <p>24 Adjiringano Rd</p>
              <p>Accra, Ghana</p>
              <a
                href="tel:+233544191868"
                className="block hover:text-gold transition-colors duration-300"
              >
                +233 54 419 1868
              </a>
            </div>
            
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold/10 hover:bg-gold hover:text-black text-gold w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
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
          <p>
            © {currentYear} Billionaire's Cut. All rights reserved. | Built with excellence
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
