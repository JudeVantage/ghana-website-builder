"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import BookingModal from "@/components/BookingModal";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Scissors, Sparkles, Ruler, Crown } from "lucide-react";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const services = [
    {
      icon: Scissors,
      title: "Signature Cut",
      description: "Premium haircut with hot towel treatment and styling",
      price: "GH₵ 80",
    },
    {
      icon: Sparkles,
      title: "Royal Shave",
      description: "Traditional hot towel shave with premium products",
      price: "GH₵ 60",
    },
    {
      icon: Ruler,
      title: "Beard Sculpting",
      description: "Expert beard trim and shaping to perfection",
      price: "GH₵ 50",
    },
    {
      icon: Crown,
      title: "VIP Experience",
      description: "The complete package for the modern gentleman",
      price: "GH₵ 180",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar onBookClick={() => setIsBookingModalOpen(true)} />
      <Hero onBookClick={() => setIsBookingModalOpen(true)} />
      <TrustStrip />
      <Services onBookClick={() => setIsBookingModalOpen(true)} />
      <WhyChooseUs />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        services={services}
        phoneNumber="233544191868"
      />
    </main>
  );
}
