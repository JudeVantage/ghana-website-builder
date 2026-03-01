"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";

const Menu = () => {
  const { menu } = siteConfig;
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            {menu.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {menu.sectionSubtitle}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          {menu.categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-neutral-light text-gray-700 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {menu.categories[activeCategory].items.map((item, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-light p-8 rounded-xl hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon
                    size={32}
                    className="text-primary group-hover:text-white"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-serif font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-accent-dark">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
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
