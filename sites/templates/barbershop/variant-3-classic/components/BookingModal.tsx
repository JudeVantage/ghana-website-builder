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
    
    const message = `APPOINTMENT REQUEST\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}`;
    
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
            className="fixed inset-0 bg-black/60 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white z-50 max-h-[90vh] overflow-y-auto vintage-card"
          >
            <div className="p-6">
              {/* Header with Stripe */}
              <div className="barber-stripe h-2 mb-6 -mx-6 -mt-6" />
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-display font-bold text-barber-red uppercase">
                    Book Now
                  </h2>
                  <div className="w-20 h-1 bg-barber-red mt-2" />
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-barber-red hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-barber-brown mb-2 uppercase">
                    <User className="inline w-4 h-4 mr-2" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-4 border-barber-brown focus:border-barber-red focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-barber-brown mb-2 uppercase">
                    <PhoneIcon className="inline w-4 h-4 mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-4 border-barber-brown focus:border-barber-red focus:outline-none transition-colors"
                    placeholder="0244123456"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-barber-brown mb-2 uppercase">
                    Service
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border-4 border-barber-brown focus:border-barber-red focus:outline-none transition-colors"
                  >
                    <option value="">Pick your service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.name}>
                        {service.name} - {service.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-barber-brown mb-2 uppercase">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 border-4 border-barber-brown focus:border-barber-red focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-barber-brown mb-2 uppercase">
                    <Clock className="inline w-4 h-4 mr-2" />
                    Time
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 border-4 border-barber-brown focus:border-barber-red focus:outline-none transition-colors"
                  />
                </div>

                <button type="submit" className="btn-barber w-full mt-6">
                  Book via WhatsApp
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
