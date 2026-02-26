"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface BookingSlotsProps {
  businessName: string;
  phoneNumber: string;
  hours?: { start: number; end: number }; // 24-hour format
}

const BookingSlots = ({ 
  businessName, 
  phoneNumber,
  hours = { start: 9, end: 19 } // 9 AM to 7 PM default
}: BookingSlotsProps) => {
  const [weekOffset, setWeekOffset] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Generate time slots (30-minute intervals)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = hours.start; hour < hours.end; hour++) {
      slots.push({ hour, minute: 0 });
      slots.push({ hour, minute: 30 });
    }
    return slots;
  };

  // Get week dates (Mon-Sat)
  const getWeekDates = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const daysFromMonday = currentDay === 0 ? 6 : currentDay - 1; // Sunday = 6 days from Monday
    
    const monday = new Date(today);
    monday.setDate(today.getDate() - daysFromMonday + (weekOffset * 7));
    
    const weekDates = [];
    for (let i = 0; i < 6; i++) { // Mon-Sat
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      weekDates.push(date);
    }
    return weekDates;
  };

  // Check if slot is in the past
  const isPastSlot = (date: Date, hour: number, minute: number) => {
    const slotTime = new Date(date);
    slotTime.setHours(hour, minute, 0, 0);
    return slotTime < currentTime;
  };

  // Format time slot
  const formatTime = (hour: number, minute: number) => {
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    const displayMinute = minute.toString().padStart(2, "0");
    return `${displayHour}:${displayMinute} ${period}`;
  };

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { 
      weekday: "short", 
      month: "short", 
      day: "numeric" 
    });
  };

  // Handle WhatsApp booking
  const handleBooking = (date: Date, hour: number, minute: number) => {
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const fullDate = date.toLocaleDateString("en-US", { 
      month: "long", 
      day: "numeric",
      year: "numeric"
    });
    const time = formatTime(hour, minute);
    
    const message = `Hi! I'd like to book an appointment on ${dayName}, ${fullDate} at ${time}. Please confirm availability.`;
    const encodedMessage = encodeURIComponent(message);
    
    // Use WhatsApp Web for desktop, mobile app for mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
      ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const timeSlots = generateTimeSlots();
  const weekDates = getWeekDates();

  return (
    <section id="booking" className="section-padding bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-gold mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Book Your <span className="text-gradient">Appointment</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select your preferred date and time. We'll confirm availability via WhatsApp.
          </p>
        </motion.div>

        {/* Week Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-between mb-8 max-w-md mx-auto"
        >
          <motion.button
            onClick={() => setWeekOffset(weekOffset - 1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gold/10 hover:bg-gold/20 border border-gold/30 hover:border-gold/50 rounded-full p-3 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gold" />
          </motion.button>
          
          <div className="text-center">
            <p className="text-sm text-gray-400">
              {weekOffset === 0 ? "This Week" : weekOffset === 1 ? "Next Week" : `${Math.abs(weekOffset)} weeks ${weekOffset > 0 ? "ahead" : "ago"}`}
            </p>
            <p className="text-white font-semibold">
              {weekDates[0]?.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - {weekDates[5]?.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </p>
          </div>
          
          <motion.button
            onClick={() => setWeekOffset(weekOffset + 1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gold/10 hover:bg-gold/20 border border-gold/30 hover:border-gold/50 rounded-full p-3 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gold" />
          </motion.button>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gray-900/50 border border-gold/20 rounded-2xl p-6 overflow-x-auto"
          >
            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-4 mb-4">
              <div className="text-center font-semibold text-gray-500 text-sm">Time</div>
              {weekDates.map((date, index) => (
                <div key={index} className="text-center">
                  <p className="text-gold font-bold text-sm">
                    {date.toLocaleDateString("en-US", { weekday: "short" })}
                  </p>
                  <p className="text-white text-xs">
                    {date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </p>
                </div>
              ))}
            </div>

            {/* Time Slots Grid */}
            <div className="space-y-3">
              {timeSlots.map((slot, slotIndex) => (
                <div key={slotIndex} className="grid grid-cols-7 gap-4">
                  <div className="flex items-center justify-center text-gray-400 text-sm font-bold">
                    {formatTime(slot.hour, slot.minute)}
                  </div>
                  {weekDates.map((date, dateIndex) => {
                    const isPast = isPastSlot(date, slot.hour, slot.minute);
                    return (
                      <motion.button
                        key={dateIndex}
                        onClick={() => !isPast && handleBooking(date, slot.hour, slot.minute)}
                        disabled={isPast}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (slotIndex * 0.02) + (dateIndex * 0.01), duration: 0.3 }}
                        whileHover={!isPast ? { scale: 1.05, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)" } : {}}
                        whileTap={!isPast ? { scale: 0.95 } : {}}
                        className={`
                          h-12 rounded-lg font-medium text-sm transition-all duration-300
                          ${isPast 
                            ? "bg-gray-800/30 text-gray-600 cursor-not-allowed border border-gray-700/30" 
                            : "bg-gray-800/50 text-gray-300 border border-gold/20 hover:bg-gold hover:text-black hover:border-gold cursor-pointer"
                          }
                        `}
                      >
                        {isPast ? "—" : "Available"}
                      </motion.button>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          {weekDates.map((date, dateIndex) => (
            <motion.div
              key={dateIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: dateIndex * 0.1, duration: 0.5 }}
              className="bg-gray-900/50 border border-gold/20 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((slot, slotIndex) => {
                  const isPast = isPastSlot(date, slot.hour, slot.minute);
                  return (
                    <motion.button
                      key={slotIndex}
                      onClick={() => !isPast && handleBooking(date, slot.hour, slot.minute)}
                      disabled={isPast}
                      whileHover={!isPast ? { scale: 1.03 } : {}}
                      whileTap={!isPast ? { scale: 0.97 } : {}}
                      className={`
                        h-14 rounded-xl font-semibold transition-all duration-300
                        ${isPast 
                          ? "bg-gray-800/30 text-gray-600 cursor-not-allowed border border-gray-700/30" 
                          : "bg-gray-800/50 text-white border border-gold/30 hover:bg-gold hover:text-black hover:border-gold hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
                        }
                      `}
                    >
                      {formatTime(slot.hour, slot.minute)}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-center text-gray-400 text-sm"
        >
          <p>Click any available slot to book via WhatsApp</p>
          <p className="mt-2">Operating hours: {formatTime(hours.start, 0)} - {formatTime(hours.end, 0)}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSlots;
