"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";

const Menu = () => {
  const { categories } = siteConfig.menu;
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="section-padding bg-[#FFF8F0]">
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
            {siteConfig.menu.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {siteConfig.menu.sectionSubtitle}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                activeCategory === index
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white text-gray-700 hover:bg-orange-50 hover:text-primary border border-orange-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories[activeCategory].items.map((item, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group border border-orange-100"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 bg-orange-50 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <item.icon
                    size={28}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-display font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-primary whitespace-nowrap ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
