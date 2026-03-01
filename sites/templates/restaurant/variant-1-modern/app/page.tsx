"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ReservationModal from "@/components/ReservationModal";
import { siteConfig } from "@/site.config";

export default function Home() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navbar onReserveClick={() => setIsReservationModalOpen(true)} />
      <Hero onReserveClick={() => setIsReservationModalOpen(true)} />
      <Menu />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </main>
  );
}
