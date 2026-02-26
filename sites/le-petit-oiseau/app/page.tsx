'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reservations from "@/components/Reservations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-black">
      <Navbar onReserveClick={handleOpenBookingModal} />
      <Hero onReserveClick={handleOpenBookingModal} />
      <section id="about">
        <About />
      </section>
      <section id="reservations">
        <Reservations onBookNowClick={handleOpenBookingModal} />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <Contact />
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseBookingModal} />
    </main>
  );
}
