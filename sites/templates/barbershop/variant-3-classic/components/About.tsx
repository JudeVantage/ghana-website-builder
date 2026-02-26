"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Master Barbers",
      description: "Trained in classic techniques",
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "All ages welcome",
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "No long waits",
    },
  ];

  return (
    <section id="about" className="section-padding bg-barber-cream">
      <div className="container-classic">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <div className="vintage-card p-3">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop"
                    alt="Barbershop Chair"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="vintage-card p-3">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop"
                    alt="Tools"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="vintage-card p-3">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=300&fit=crop"
                    alt="Service"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="vintage-card p-3">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop"
                    alt="Interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-barber-red uppercase mb-6 text-shadow-classic">
              About Us
            </h2>
            <div className="w-24 h-1 bg-barber-red mb-8" />
            
            <div className="text-lg text-barber-darkbrown space-y-4 mb-8 leading-relaxed">
              {{ABOUT_TEXT}}
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white p-4 border-l-4 border-barber-red shadow-md"
                >
                  <div className="p-3 bg-barber-red text-white">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-barber-brown text-lg uppercase">{feature.title}</h3>
                    <p className="text-barber-darkbrown">{feature.description}</p>
                  </div>
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
