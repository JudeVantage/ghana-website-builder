"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
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

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <main className="bg-dark min-h-screen">
      <Navbar onOrderClick={() => setIsReservationOpen(true)} />
      <Hero onOrderClick={() => setIsReservationOpen(true)} />
      <Menu />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </main>
  );
}
