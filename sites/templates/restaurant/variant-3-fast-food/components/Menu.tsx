"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";

export default function Menu() {
  const { menu } = siteConfig;

  return (
    <section id="menu" className="section-padding section-dark-alt relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

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
            What We Serve
          </span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            {menu.sectionTitle}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {menu.sectionSubtitle}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menu.categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            >
              {/* Category Name */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 bg-accent rotate-45" />
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white uppercase tracking-wider">
                  {category.name}
                </h3>
                <div className="flex-1 h-px bg-dark-300" />
              </div>

              {/* Category Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: itemIndex % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="card-dark-hover p-6 flex items-start gap-5 group"
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/40">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <h4 className="font-display font-bold text-lg text-white truncate">
                            {item.name}
                          </h4>
                          <span className="flex-shrink-0 font-display font-bold text-xl text-accent">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
