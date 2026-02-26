"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Clock, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Users, label: "Happy Clients", value: "2000+" },
    { icon: Clock, label: "Services Done", value: "5000+" },
    { icon: Heart, label: "Customer Rating", value: "4.9" },
  ];

  return (
    <section id="about" className="section-padding bg-neutral-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop"
              alt="About Us"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <div className="text-lg text-gray-600 space-y-4 mb-8">
              {{ABOUT_TEXT}}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-4 bg-white rounded-lg"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
