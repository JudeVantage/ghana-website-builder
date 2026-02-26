"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-barber-brown text-white py-12 relative">
      {/* Top Stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 barber-stripe" />
      
      <div className="container-classic px-4 pt-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-4 uppercase text-barber-red">
              {{BUSINESS_NAME}}
            </h3>
            <p className="text-barber-cream mb-4 font-bold">
              {{BUSINESS_TAGLINE}}
            </p>
            <div className="w-20 h-1 bg-barber-red" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-xl uppercase text-barber-cream">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/80 hover:text-barber-red transition-colors font-bold uppercase text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4 text-xl uppercase text-barber-cream">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-4 bg-barber-red hover:bg-white hover:text-barber-red transition-all duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="p-4 bg-barber-red hover:bg-white hover:text-barber-red transition-all duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="p-4 bg-barber-red hover:bg-white hover:text-barber-red transition-all duration-300"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-barber-red pt-6 text-center">
          <p className="text-barber-cream font-bold uppercase tracking-wide">
            © {currentYear} {{BUSINESS_NAME}} • A Classic Tradition
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
