'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star, Phone, ShieldCheck, MapPin, CheckCircle2, Scale, Calendar, Clock, Sparkles } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 dark-gradient-bg overflow-hidden curved-bottom-hero shadow-2xl">
      {/* Ambient Breathing Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-600/15 rounded-full blur-3xl pointer-events-none animate-light-pulse" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold-400/10 rounded-full blur-[120px] pointer-events-none animate-light-pulse" style={{ animationDelay: '2.5s' }} />

      {/* Decorative Fine Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C5A46D 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Credibility & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400" />
              </span>
              <span className="text-gold-200 text-xs sm:text-sm font-medium tracking-wide">
                Escritório em Lisboa · Parque das Nações
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-legal font-bold text-white tracking-tight leading-[1.12]">
              Advocacia e Soluções{' '}
              <span className="gold-gradient-text block sm:inline">
                Jurídicas com Foco
              </span>{' '}
              no Cliente
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Serviço jurídico competente, diligente e personalizado em Lisboa. Defendemos os seus interesses com rigor técnico, transparência e compromisso ético inabalável.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-legal-950 font-bold text-base shadow-xl shadow-gold-500/20 transform hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer group"
              >
                <span>Fale Connosco</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:918651224"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-gold-400/30 hover:border-gold-300 bg-white/5 hover:bg-white/10 text-white font-medium text-base backdrop-blur-sm transition-all"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>918 651 224</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-xs text-gray-300 font-medium">Atendimento Personalizado</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-xs text-gray-300 font-medium">Sigilo Profissional Absoluto</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-xs text-gray-300 font-medium">Resposta Ágil e Diligente</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Executive Showcase Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Visual Glassmorphism Card */}
            <div className="w-full max-w-md rounded-3xl overflow-hidden border border-gold-400/30 shadow-2xl bg-legal-900/90 backdrop-blur-xl p-6 sm:p-7 space-y-5 relative group">
              
              {/* Top Bar of the Card */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-emerald-400 text-xs font-semibold tracking-wide">
                    Atendimento Presencial & Online
                  </span>
                </div>

                <span className="px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold">
                  Lisboa · Sede
                </span>
              </div>

              {/* Authentic Photo of the Law Office in Lisbon */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-gold-400/20 bg-legal-950 group/img">
                <Image
                  src="/images/sala-reunioes-1.png"
                  alt="Gabinete de Advocacia Liliana Pontes - Lisboa Parque das Nações"
                  fill
                  priority
                  className="object-cover group-hover/img:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-legal-950 via-legal-950/20 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs font-bold text-gold-300">Sala de Conferências & Reuniões</p>
                    <p className="text-[11px] text-gray-300">Ambiente de total discrição e sigilo</p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300">
                    <Scale className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Lawyer Identity & Credentials */}
              <div className="pt-1 flex items-center gap-4">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-700/30 border border-gold-400/50 flex items-center justify-center text-gold-300 font-serif-legal font-bold text-2xl shrink-0 shadow-inner p-3">
                  LP
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-serif-legal font-bold text-xl sm:text-2xl truncate">
                    Dra. Liliana Pontes
                  </h3>
                  <p className="text-gold-300/90 text-xs sm:text-sm font-medium">
                    Advogada · Ordem dos Advogados
                  </p>
                </div>
              </div>

              {/* Google Reviews Badge */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-white font-bold text-sm">4.7</span>
                </div>
                <span className="text-[11px] text-gray-300 font-medium">
                  Dezenas de Avaliações Google
                </span>
              </div>

              {/* Direct Details Quick Card */}
              <div className="space-y-2 text-xs text-gray-300 border-t border-white/10 pt-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span className="truncate">Av. Dom João II 2, 1990-044 Lisboa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Segunda a Sexta (aberto a partir das 08:00)</span>
                </div>
              </div>

              {/* Quick Card Action */}
              <div className="pt-1">
                <button
                  onClick={onOpenBooking}
                  className="btn-shimmer w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-legal-950 font-bold text-xs tracking-wider uppercase shadow-md hover:from-gold-400 hover:to-gold-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Consulta Jurídica</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Global International Presence Marquee Strip */}
        <div className="mt-14 pt-8 border-t border-gold-400/15 overflow-hidden">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gold-300/80 mb-3 justify-center">
            <Scale className="w-4 h-4 text-gold-400" />
            <span>Escritórios & Polos de Apoio Internacional</span>
          </div>

          <div className="relative w-full overflow-hidden whitespace-nowrap mask-radial">
            <div className="animate-marquee flex items-center gap-8 text-gray-300 text-xs sm:text-sm font-medium">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <strong className="text-white">Lisboa (Sede)</strong> · Av. Dom João II 2, Parque das Nações
              </span>
              <span className="text-gold-400/50">✦</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <strong>Póvoa de Varzim</strong>
              </span>
              <span className="text-gold-400/50">✦</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <strong>Paris (França)</strong>
              </span>
              <span className="text-gold-400/50">✦</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <strong>Hamburgo (Alemanha)</strong>
              </span>
              <span className="text-gold-400/50">✦</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <strong>São Paulo (Brasil)</strong>
              </span>
              <span className="text-gold-400/50">✦</span>
              {/* Repeated for continuous scroll */}
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <strong className="text-white">Lisboa (Sede)</strong> · Av. Dom João II 2, Parque das Nações
              </span>
              <span className="text-gold-400/50">✦</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <strong>Póvoa de Varzim</strong>
              </span>
              <span className="text-gold-400/50">✦</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <strong>Paris (França)</strong>
              </span>
              <span className="text-gold-400/50">✦</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <strong>Hamburgo (Alemanha)</strong>
              </span>
              <span className="text-gold-400/50">✦</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <strong>São Paulo (Brasil)</strong>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
