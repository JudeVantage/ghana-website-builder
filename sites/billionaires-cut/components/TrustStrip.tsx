"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, ThumbsUp } from "lucide-react";

const TrustStrip = () => {
  const stats = [
    { icon: Award, value: "5.0★", label: "Rating" },
    { icon: Users, value: "63+", label: "Reviews" },
    { icon: Clock, value: "7 Days", label: "Open" },
    { icon: ThumbsUp, value: "100%", label: "Satisfaction" },
  ];

  return (
    <section className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-black" />
              <div className="text-3xl md:text-4xl font-bold text-black mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-black/80 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
