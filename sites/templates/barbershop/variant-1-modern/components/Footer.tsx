"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 text-primary">
              {{BUSINESS_NAME}}
            </h3>
            <p className="text-gray-400 mb-4">
              {{BUSINESS_TAGLINE}}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-display font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} {{BUSINESS_NAME}}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
