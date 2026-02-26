"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Phone as PhoneIcon } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  name: string;
  description: string;
  price: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: Service[];
  phoneNumber: string;
}

const BookingModal = ({ isOpen, onClose, services, phoneNumber }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Luxury Appointment Request:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-luxury-card rounded-none shadow-2xl z-50 max-h-[90vh] overflow-y-auto border-2 border-gold/30"
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gold/20">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-gold mb-2">
                    Reserve Your Seat
                  </h2>
                  <div className="h-px bg-gold/50 w-20" />
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gold/10 transition-colors text-gold"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gold mb-3 uppercase tracking-wider">
                    <User className="inline w-4 h-4 mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-luxury-bg border-2 border-gold/30 focus:border-gold text-luxury-text focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gold mb-3 uppercase tracking-wider">
                    <PhoneIcon className="inline w-4 h-4 mr-2" />
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-luxury-bg border-2 border-gold/30 focus:border-gold text-luxury-text focus:outline-none transition-colors"
                    placeholder="0244123456"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gold mb-3 uppercase tracking-wider">
                    Select Service
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-luxury-bg border-2 border-gold/30 focus:border-gold text-luxury-text focus:outline-none transition-colors"
                  >
                    <option value="">Choose your experience</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.name}>
                        {service.name} - {service.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gold mb-3 uppercase tracking-wider">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-luxury-bg border-2 border-gold/30 focus:border-gold text-luxury-text focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gold mb-3 uppercase tracking-wider">
                    <Clock className="inline w-4 h-4 mr-2" />
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 bg-luxury-bg border-2 border-gold/30 focus:border-gold text-luxury-text focus:outline-none transition-colors"
                  />
                </div>

                <button type="submit" className="btn-gold w-full mt-8">
                  Confirm via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
