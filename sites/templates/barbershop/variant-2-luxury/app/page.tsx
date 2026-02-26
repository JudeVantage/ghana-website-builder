"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Scissors, Crown, Sparkles, Award } from "lucide-react";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const services = [
    {
      icon: Scissors,
      name: "{{SERVICE_1_NAME}}",
      description: "{{SERVICE_1_DESCRIPTION}}",
      price: "{{SERVICE_1_PRICE}}",
    },
    {
      icon: Crown,
      name: "{{SERVICE_2_NAME}}",
      description: "{{SERVICE_2_DESCRIPTION}}",
      price: "{{SERVICE_2_PRICE}}",
    },
    {
      icon: Sparkles,
      name: "{{SERVICE_3_NAME}}",
      description: "{{SERVICE_3_DESCRIPTION}}",
      price: "{{SERVICE_3_PRICE}}",
    },
    {
      icon: Award,
      name: "{{SERVICE_4_NAME}}",
      description: "{{SERVICE_4_DESCRIPTION}}",
      price: "{{SERVICE_4_PRICE}}",
    },
  ];

  return (
    <main className="min-h-screen bg-luxury-bg">
      <Navbar onBookClick={() => setIsBookingModalOpen(true)} />
      <Hero onBookClick={() => setIsBookingModalOpen(true)} />
      <Services services={services} />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp phoneNumber="{{WHATSAPP_NUMBER}}" />
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        services={services}
        phoneNumber="{{PHONE_NUMBER}}"
      />
    </main>
  );
}
