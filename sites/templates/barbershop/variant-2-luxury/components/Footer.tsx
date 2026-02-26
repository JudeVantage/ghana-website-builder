"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-luxury-text py-16 border-t border-gold/20">
      <div className="container-luxury px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6 text-gold">
              {{BUSINESS_NAME}}
            </h3>
            <p className="text-luxury-text/70 mb-6 leading-relaxed italic">
              {{BUSINESS_TAGLINE}}
            </p>
            <div className="h-px bg-gold/30 w-24" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-6 text-xl uppercase tracking-wider text-gold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-luxury-text/70 hover:text-gold transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-6 h-px bg-gold transition-all duration-300 mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-serif font-bold mb-6 text-xl uppercase tracking-wider text-gold">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-4 border-2 border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
              >
                <Facebook size={24} className="text-gold" />
              </a>
              <a
                href="#"
                className="p-4 border-2 border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
              >
                <Instagram size={24} className="text-gold" />
              </a>
              <a
                href="#"
                className="p-4 border-2 border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
              >
                <Twitter size={24} className="text-gold" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-luxury-text/60 text-center md:text-left">
            © {currentYear} {{BUSINESS_NAME}}. Crafted with excellence.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-luxury-text/60 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-luxury-text/60 hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
