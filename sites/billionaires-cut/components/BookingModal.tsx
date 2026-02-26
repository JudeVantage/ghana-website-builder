"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar, Clock, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface Service {
  title: string;
  description: string;
  price: string;
  icon?: any;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: Service[];
  phoneNumber: string;
}

const BookingModal = ({ isOpen, onClose, services, phoneNumber }: BookingModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setCurrentStep(1);
        setSelectedService(null);
        setSelectedDate(null);
        setSelectedTime(null);
      }, 300);
    }
  }, [isOpen]);

  // Generate next 3 weeks of dates
  const generateDates = () => {
    const dates: Date[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 21; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  // Generate time slots (9am - 7pm, 30min intervals)
  const generateTimeSlots = () => {
    const slots: string[] = [];
    for (let hour = 9; hour < 19; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    return slots;
  };

  // Check if time slot is in the past
  const isTimeSlotPast = (time: string) => {
    if (!selectedDate) return false;
    
    const now = new Date();
    const [hours, minutes] = time.split(':').map(Number);
    const slotDate = new Date(selectedDate);
    slotDate.setHours(hours, minutes, 0, 0);
    
    return slotDate < now;
  };

  // Format time to 12-hour format
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return `${displayHour}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  // Handle WhatsApp booking
  const handleConfirmBooking = () => {
    if (!selectedService || !selectedDate || !selectedTime) return;

    const dayName = selectedDate.toLocaleDateString("en-US", { weekday: "long" });
    const fullDate = selectedDate.toLocaleDateString("en-US", { 
      month: "long", 
      day: "numeric",
      year: "numeric"
    });
    const formattedTime = formatTime(selectedTime);
    
    const message = `Hi! I'd like to book ${selectedService.title} on ${dayName}, ${fullDate} at ${formattedTime}. Please confirm availability.`;
    const encodedMessage = encodeURIComponent(message);
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
      ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const dates = generateDates();
  const timeSlots = generateTimeSlots();

  // Step 1: Select Service
  const renderServiceStep = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Select a Service</h3>
      <div className="grid gap-4 max-h-[400px] overflow-y-auto pr-2">
        {services.map((service, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedService(service)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              p-4 rounded-xl text-left transition-all duration-300
              ${selectedService?.title === service.title
                ? 'bg-gold/20 border-2 border-gold shadow-lg shadow-gold/20'
                : 'bg-gray-800/50 border-2 border-gray-700/50 hover:border-gold/50'
              }
            `}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-1">{service.title}</h4>
                <p className="text-gray-400 text-sm mb-2">{service.description}</p>
              </div>
              <span className="text-gold font-bold text-lg ml-4">{service.price}</span>
            </div>
          </motion.button>
        ))}
      </div>
      <button
        onClick={() => setCurrentStep(2)}
        disabled={!selectedService}
        className={`
          w-full mt-6 py-4 rounded-full font-bold text-lg transition-all duration-300
          ${selectedService
            ? 'bg-gold text-black hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/30'
            : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }
        `}
      >
        Next: Select Date
      </button>
    </motion.div>
  );

  // Step 2: Pick Date
  const renderDateStep = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold text-white mb-6">
        <Calendar className="inline w-6 h-6 mr-2 mb-1" />
        Pick a Date
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-[400px] overflow-y-auto pr-2">
        {dates.map((date, index) => {
          const isToday = date.toDateString() === new Date().toDateString();
          const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
          const isSelected = selectedDate?.toDateString() === date.toDateString();
          
          return (
            <motion.button
              key={index}
              onClick={() => !isPast && setSelectedDate(date)}
              disabled={isPast}
              whileHover={!isPast ? { scale: 1.05 } : {}}
              whileTap={!isPast ? { scale: 0.95 } : {}}
              className={`
                p-4 rounded-xl text-center transition-all duration-300
                ${isPast
                  ? 'bg-gray-800/20 text-gray-600 cursor-not-allowed border border-gray-700/30'
                  : isSelected
                    ? 'bg-gold text-black border-2 border-gold shadow-lg shadow-gold/30'
                    : 'bg-gray-800/50 text-white border border-gray-700/50 hover:border-gold/50'
                }
              `}
            >
              <div className="text-xs font-semibold mb-1">
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <div className="text-2xl font-bold">
                {date.getDate()}
              </div>
              <div className="text-xs mt-1">
                {date.toLocaleDateString('en-US', { month: 'short' })}
              </div>
              {isToday && !isPast && (
                <div className="text-xs text-gold mt-1">Today</div>
              )}
            </motion.button>
          );
        })}
      </div>
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setCurrentStep(1)}
          className="flex-1 py-4 rounded-full font-bold text-lg bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
        >
          <ChevronLeft className="inline w-5 h-5 mr-1 mb-1" />
          Back
        </button>
        <button
          onClick={() => setCurrentStep(3)}
          disabled={!selectedDate}
          className={`
            flex-1 py-4 rounded-full font-bold text-lg transition-all duration-300
            ${selectedDate
              ? 'bg-gold text-black hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/30'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          Next: Select Time
          <ChevronRight className="inline w-5 h-5 ml-1 mb-1" />
        </button>
      </div>
    </motion.div>
  );

  // Step 3: Pick Time
  const renderTimeStep = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold text-white mb-2">
        <Clock className="inline w-6 h-6 mr-2 mb-1" />
        Choose a Time
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[350px] overflow-y-auto pr-2">
        {timeSlots.map((time, index) => {
          const isPast = isTimeSlotPast(time);
          const isSelected = selectedTime === time;
          
          return (
            <motion.button
              key={index}
              onClick={() => !isPast && setSelectedTime(time)}
              disabled={isPast}
              whileHover={!isPast ? { scale: 1.05 } : {}}
              whileTap={!isPast ? { scale: 0.95 } : {}}
              className={`
                py-3 px-4 rounded-lg font-semibold transition-all duration-300
                ${isPast
                  ? 'bg-gray-800/20 text-gray-600 cursor-not-allowed border border-gray-700/30'
                  : isSelected
                    ? 'bg-gold text-black border-2 border-gold shadow-lg shadow-gold/30'
                    : 'bg-gray-800/50 text-white border border-gray-700/50 hover:border-gold/50'
                }
              `}
            >
              {formatTime(time)}
            </motion.button>
          );
        })}
      </div>
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setCurrentStep(2)}
          className="flex-1 py-4 rounded-full font-bold text-lg bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
        >
          <ChevronLeft className="inline w-5 h-5 mr-1 mb-1" />
          Back
        </button>
        <button
          onClick={() => setCurrentStep(4)}
          disabled={!selectedTime}
          className={`
            flex-1 py-4 rounded-full font-bold text-lg transition-all duration-300
            ${selectedTime
              ? 'bg-gold text-black hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/30'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          Confirm Booking
          <ChevronRight className="inline w-5 h-5 ml-1 mb-1" />
        </button>
      </div>
    </motion.div>
  );

  // Step 4: Confirmation
  const renderConfirmationStep = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="text-center space-y-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <CheckCircle className="w-20 h-20 text-gold mx-auto mb-4" />
      </motion.div>
      
      <h3 className="text-3xl font-bold text-white">Booking Summary</h3>
      
      <div className="bg-gray-800/50 border border-gold/30 rounded-2xl p-6 space-y-4">
        <div>
          <p className="text-gray-400 text-sm mb-1">Service</p>
          <p className="text-white font-bold text-xl">{selectedService?.title}</p>
          <p className="text-gold font-semibold text-lg">{selectedService?.price}</p>
        </div>
        
        <div className="border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm mb-1">Date & Time</p>
          <p className="text-white font-bold text-lg">
            {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <p className="text-gold font-semibold text-lg">
            {selectedTime && formatTime(selectedTime)}
          </p>
        </div>
      </div>

      <p className="text-gray-400 text-sm">
        Click below to confirm your booking via WhatsApp
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => setCurrentStep(3)}
          className="flex-1 py-4 rounded-full font-bold text-lg bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
        >
          <ChevronLeft className="inline w-5 h-5 mr-1 mb-1" />
          Back
        </button>
        <motion.button
          onClick={handleConfirmBooking}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 py-4 rounded-full font-bold text-lg bg-gold text-black hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
        >
          Book via WhatsApp
        </motion.button>
      </div>
    </motion.div>
  );

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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal Dialog */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black border-2 border-gold/30 rounded-3xl shadow-2xl shadow-gold/20 w-full max-w-2xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-900 to-black border-b border-gold/20 p-6 flex items-center justify-between">
                <div className="flex-1">
                  {/* Progress Indicator */}
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                          step <= currentStep ? 'bg-gold' : 'bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm">
                    Step {currentStep} of 4
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="ml-4 text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && renderServiceStep()}
                  {currentStep === 2 && renderDateStep()}
                  {currentStep === 3 && renderTimeStep()}
                  {currentStep === 4 && renderConfirmationStep()}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
