'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Áreas de Prática', href: '#areas' },
    { name: 'O Escritório', href: '#escritorio' },
    { name: 'Testemunhos', href: '#testemunhos' },
    { name: 'Contactos', href: '#contactos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-3 shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-legal-950/90 via-legal-950/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-lg border border-gold-400/40 bg-gradient-to-br from-legal-800 to-legal-950 flex items-center justify-center text-gold-300 font-serif-legal font-bold text-2xl tracking-wider shadow-inner group-hover:border-gold-300 transition-colors">
              LP
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif-legal text-xl sm:text-2xl font-medium tracking-wide group-hover:text-gold-200 transition-colors">
                Liliana Pontes
              </span>
              <span className="text-gold-400/90 text-xs tracking-[0.25em] uppercase font-sans font-medium">
                Advogada
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-gold-300 text-sm font-medium tracking-wide transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:918651224"
              className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-white px-3 py-2 rounded-full border border-white/10 hover:border-gold-400/40 bg-white/5 transition-all"
              title="Ligar para o escritório"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span className="font-semibold tracking-wide">918 651 224</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="btn-shimmer flex items-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-legal-950 font-semibold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md hover:shadow-gold-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Marcar Consulta</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="btn-shimmer sm:hidden flex items-center gap-1.5 bg-gold-400 text-legal-950 font-bold px-3 py-1.5 rounded-full text-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Consulta</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white rounded-lg border border-white/10 bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-header border-t border-gold-400/20 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fade-in shadow-2xl">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-100 hover:text-gold-300 hover:bg-white/5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-gold-400/60" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2.5">
            <a
              href="tel:918651224"
              className="flex items-center justify-center gap-2.5 w-full py-2.5 rounded-xl border border-gold-400/30 bg-white/5 text-gray-200 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Ligar: 918 651 224</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-shimmer flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-legal-950 font-bold text-sm shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Marcar Consulta Jurídica</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
