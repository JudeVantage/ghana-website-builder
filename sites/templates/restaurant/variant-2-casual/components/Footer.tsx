"use client";

import { Facebook, Instagram, Twitter, Utensils } from "lucide-react";
import { siteConfig } from "@/site.config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#78350F] text-white py-12">
      <div className="container-custom px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Utensils className="w-6 h-6 text-orange-300" />
              <h3 className="text-2xl font-display font-bold text-orange-300">
                {siteConfig.businessName}
              </h3>
            </div>
            <p className="text-orange-100/80 mb-4 leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4 text-orange-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#menu", label: "Menu" },
                { href: "#about", label: "About" },
                { href: "#gallery", label: "Gallery" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-orange-100/70 hover:text-orange-300 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-display font-bold mb-4 text-orange-300">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href={siteConfig.socials.facebook}
                className="p-3 bg-[#92400E] rounded-full hover:bg-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteConfig.socials.instagram}
                className="p-3 bg-[#92400E] rounded-full hover:bg-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteConfig.socials.twitter}
                className="p-3 bg-[#92400E] rounded-full hover:bg-primary transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#92400E] pt-8 text-center text-orange-100/60">
          <p>
            &copy; {currentYear} {siteConfig.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
