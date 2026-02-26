'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [partySize, setPartySize] = useState(2);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [timeSlot, setTimeSlot] = useState<'lunch' | 'dinner'>('dinner');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset form when closing
      setTimeout(() => {
        setStep(1);
        setPartySize(2);
        setSelectedDate('');
        setSelectedTime('');
        setTimeSlot('dinner');
      }, 300);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleConfirm = () => {
    const message = `Hi! I'd like to reserve a table for ${partySize} ${partySize === 1 ? 'person' : 'people'} on ${selectedDate} at ${selectedTime}. Please confirm.`;
    const whatsappUrl = `https://wa.me/233599420024?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const partySizes = [2, 3, 4, 5, 6, 7, 8];
  
  const lunchTimes = ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM'];
  const dinnerTimes = ['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'];

  const availableTimes = timeSlot === 'lunch' ? lunchTimes : dinnerTimes;

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  const canProceed = () => {
    if (step === 1) return partySize > 0;
    if (step === 2) return selectedDate !== '';
    if (step === 3) return selectedTime !== '';
    return false;
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#1a1a1a] rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-white/10"
            >
              {/* Header */}
              <div className="sticky top-0 bg-[#1a1a1a] border-b border-white/10 p-6 flex items-center justify-between z-10">
                <h2 className="font-playfair text-2xl text-white font-semibold">Reserve Your Table</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="px-6 pt-4">
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        i <= step ? 'bg-[#d4af37]' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {/* Step 1: Party Size */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Party Size</h3>
                        <p className="text-gray-400 text-sm">How many people will be joining?</p>
                      </div>
                      <div className="grid grid-cols-4 gap-3">
                        {partySizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setPartySize(size)}
                            className={`py-4 rounded-lg font-semibold transition-all duration-300 ${
                              partySize === size
                                ? 'bg-[#d4af37] text-black'
                                : 'bg-white/5 text-white hover:bg-white/10'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Date */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Select Date</h3>
                        <p className="text-gray-400 text-sm">When would you like to dine with us?</p>
                      </div>
                      <input
                        type="date"
                        min={today}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all"
                      />
                    </motion.div>
                  )}

                  {/* Step 3: Time */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Select Time</h3>
                        <p className="text-gray-400 text-sm">Choose your preferred time slot</p>
                      </div>

                      {/* Lunch/Dinner Toggle */}
                      <div className="flex gap-2 p-1 bg-white/5 rounded-lg">
                        <button
                          onClick={() => {
                            setTimeSlot('lunch');
                            setSelectedTime('');
                          }}
                          className={`flex-1 py-2 rounded-md font-medium transition-all duration-300 ${
                            timeSlot === 'lunch'
                              ? 'bg-[#d4af37] text-black'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Lunch (12-3PM)
                        </button>
                        <button
                          onClick={() => {
                            setTimeSlot('dinner');
                            setSelectedTime('');
                          }}
                          className={`flex-1 py-2 rounded-md font-medium transition-all duration-300 ${
                            timeSlot === 'dinner'
                              ? 'bg-[#d4af37] text-black'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Dinner (6-10PM)
                        </button>
                      </div>

                      {/* Time Slots */}
                      <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 rounded-lg font-medium transition-all duration-300 ${
                              selectedTime === time
                                ? 'bg-[#d4af37] text-black'
                                : 'bg-white/5 text-white hover:bg-white/10'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Confirmation */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Confirm Reservation</h3>
                        <p className="text-gray-400 text-sm">Review your booking details</p>
                      </div>

                      <div className="bg-white/5 rounded-lg p-6 space-y-4 border border-white/10">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Party Size</p>
                            <p className="text-white font-semibold">{partySize} {partySize === 1 ? 'Person' : 'People'}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Date</p>
                            <p className="text-white font-semibold">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Time</p>
                            <p className="text-white font-semibold">{selectedTime}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-lg p-4">
                        <p className="text-white text-sm">
                          <strong>Next step:</strong> You'll be redirected to WhatsApp to confirm your reservation with our team.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-[#1a1a1a] border-t border-white/10 p-6 flex gap-3">
                {step > 1 && step < 4 && (
                  <button
                    onClick={handleBack}
                    className="flex-1 px-6 py-3 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-all font-medium"
                  >
                    Back
                  </button>
                )}
                {step < 4 ? (
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`${step === 1 ? 'w-full' : 'flex-1'} px-6 py-3 rounded-lg font-medium transition-all ${
                      canProceed()
                        ? 'bg-[#d4af37] hover:bg-[#c49d2f] text-black'
                        : 'bg-white/5 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handleConfirm}
                    className="w-full px-6 py-3 rounded-lg bg-[#d4af37] hover:bg-[#c49d2f] text-black font-medium transition-all"
                  >
                    Confirm via WhatsApp
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
