'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import PracticeAreas from '../components/PracticeAreas';
import OfficeShowcase from '../components/OfficeShowcase';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState('Consultoria Jurídica Geral');

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleSelectArea = (areaTitle) => {
    setSelectedPracticeArea(areaTitle);
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-legal-cream text-legal-900 selection:bg-gold-500 selection:text-legal-950">
      {/* Top Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Experience & About Section */}
      <Experience onOpenBooking={handleOpenBooking} />

      {/* Practice Areas Section */}
      <PracticeAreas onSelectArea={handleSelectArea} />

      {/* Office & International Presence Showcase */}
      <OfficeShowcase />

      {/* Testimonials & Social Proof (Google Reviews) */}
      <Testimonials />

      {/* Contact, Booking Form & Map Section */}
      <ContactSection prefilledArea={selectedPracticeArea} />

      {/* Footer */}
      <Footer />

      {/* Floating Action Button (WhatsApp) */}
      <FloatingWhatsApp />

      {/* Quick Booking Pop-up Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedArea={selectedPracticeArea}
      />
    </main>
  );
}
