'use client';

import React from 'react';
import { Star, Quote, CheckCircle, ExternalLink } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "Competente, diligente e com foco no cliente.",
      author: "Cliente Verificado",
      role: "Avaliação no Google Maps",
      rating: 5,
      date: "Avaliação recente",
      initials: "CV",
      highlight: true
    },
    {
      id: 2,
      quote: "Fiz uma consulta jurídica com a Dra. Liliana Pontes e fiquei muito satisfeita com a clareza e profissionalismo demonstrados.",
      author: "Maria Fernandes",
      role: "Consulta Jurídica / Lisboa",
      rating: 5,
      date: "Cliente Google Reviews",
      initials: "MF",
      highlight: true
    },
    {
      id: 3,
      quote: "Excellent lawyer, excellent professional, I recommend.",
      author: "John Saunders",
      role: "International Legal Client",
      rating: 5,
      date: "Google Maps Review",
      initials: "JS",
      highlight: true
    },
    {
      id: 4,
      quote: "Excelente apoio na resolução de um processo civil complexo. A Dra. Liliana foi incansável na defesa dos meus interesses e muito transparente com os honorários.",
      author: "Rui P. Almeida",
      role: "Direito Civil & Contratos",
      rating: 5,
      date: "Avaliação no Google",
      initials: "RA",
      highlight: false
    },
    {
      id: 5,
      quote: "Muito atenciosa e rápida na resposta. O escritório em Lisboa no Parque das Nações é muito acessível e acolhedor. Recomendo sem reservas.",
      author: "Carla Esteves",
      role: "Assessoria Jurídica Particular",
      rating: 5,
      date: "Google Reviews",
      initials: "CE",
      highlight: false
    },
    {
      id: 6,
      quote: "Profissional de excelência, com uma clareza invejável a explicar termos jurídicos e procedimentos legais. Transmite total confiança e segurança.",
      author: "António Moreira",
      role: "Consulta Empresarial",
      rating: 5,
      date: "Google Reviews",
      initials: "AM",
      highlight: false
    }
  ];

  return (
    <section id="testemunhos" className="py-20 lg:py-28 bg-legal-950 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Official Google Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          
          {/* Google Verified Review Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-gold-400/30 shadow-lg">
            {/* Google Logo Icon SVG */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white text-sm">4.7</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <span className="text-xs text-gray-300 font-medium border-l border-white/20 pl-3">
              Google Maps Reviews
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-legal font-bold tracking-tight">
            O Que Dizem os{' '}
            <span className="gold-gradient-text">Nossos Clientes</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            A satisfação, o sucesso e a tranquilidade dos nossos constituintes são a maior medida do nosso compromisso diário. Citações reais do Google Maps.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative group ${
                rev.highlight
                  ? 'bg-gradient-to-b from-legal-900 to-legal-950 border border-gold-400/40 shadow-xl shadow-gold-500/5 hover:border-gold-300'
                  : 'bg-legal-900/60 border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Quote Mark Watermark */}
              <Quote className="absolute top-5 right-5 w-8 h-8 text-gold-500/15 group-hover:text-gold-500/25 transition-colors" />

              <div>
                {/* Star Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle className="w-3 h-3" />
                    Verificada
                  </span>
                </div>

                {/* Review Quote Text */}
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-legal-950 font-bold text-xs shrink-0 shadow-md">
                  {rev.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-semibold text-sm truncate">
                    {rev.author}
                  </h4>
                  <p className="text-gold-300/70 text-xs truncate">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps External Verification Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Liliana+Pontes+Advogada+Lisboa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gold-300 hover:text-gold-200 font-semibold px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-gold-400/30 transition-all group"
          >
            <span>Consultar avaliações diretamente no Google Maps</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
