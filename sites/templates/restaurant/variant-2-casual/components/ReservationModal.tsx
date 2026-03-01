"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone as PhoneIcon,
  Users,
  MessageSquare,
} from "lucide-react";
import { siteConfig } from "@/site.config";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    partySize: "",
    date: "",
    time: "",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `${siteConfig.whatsapp.reservationMessage}\n\nName: ${formData.name}\nPhone: ${formData.phone}\nParty Size: ${formData.partySize}\nDate: ${formData.date}\nTime: ${formData.time}${formData.specialRequests ? `\nSpecial Requests: ${formData.specialRequests}` : ""}`;

    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(message)}`;
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
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#FFF8F0] rounded-3xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-bold text-warm-brown">
                  Book a Table
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-orange-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline w-4 h-4 mr-2 text-primary" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                    placeholder="Kwame Mensah"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <PhoneIcon className="inline w-4 h-4 mr-2 text-primary" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                    placeholder="0244123456"
                  />
                </div>

                {/* Party Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="inline w-4 h-4 mr-2 text-primary" />
                    Party Size
                  </label>
                  <select
                    required
                    value={formData.partySize}
                    onChange={(e) =>
                      setFormData({ ...formData, partySize: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                  >
                    <option value="">How many guests?</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3-4">3-4 people</option>
                    <option value="5-6">5-6 people</option>
                    <option value="7-10">7-10 people</option>
                    <option value="10+">10+ people</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline w-4 h-4 mr-2 text-primary" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="inline w-4 h-4 mr-2 text-primary" />
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                  />
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-2 text-primary" />
                    Special Requests (optional)
                  </label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        specialRequests: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white resize-none"
                    placeholder="Any dietary requirements, celebrations, etc."
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-casual w-full text-lg py-4">
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

export default ReservationModal;
