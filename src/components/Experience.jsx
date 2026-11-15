'use client';

import React from 'react';
import Image from 'next/image';
import { Scale, Award, Shield, Users, Clock, CheckCircle, Star, ArrowUpRight } from 'lucide-react';

export default function Experience({ onOpenBooking }) {
  const stats = [
    {
      value: '4.7 ★',
      label: 'Classificação no Google',
      desc: 'Baseada em dezenas de avaliações verificadas de clientes.',
      icon: Star,
    },
    {
      value: '+15',
      label: 'Anos de Dedicação',
      desc: 'Experiência sólida na prática forense e consultoria jurídica.',
      icon: Award,
    },
    {
      value: '98%',
      label: 'Clientes Satisfeitos',
      desc: 'Foco incansável na melhor resolução de conflitos e acordos.',
      icon: Users,
    },
    {
      value: '5',
      label: 'Polos de Atuação',
      desc: 'Lisboa, Póvoa de Varzim, Paris, Hamburgo e São Paulo.',
      icon: Shield,
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Column (Scale Graphic & 24/7) | Right Column (Text & Real Photos) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (5 Cols): The Signature Balance & Availability Badge */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:text-left">
            
            {/* 24/7 Availability Pill */}
            <div className="self-start mb-6 inline-flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-gold-300/60 shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-700 font-bold text-xs">
                24/7
              </div>
              <div className="text-left">
                <p className="text-legal-900 font-bold text-xs uppercase tracking-wider">Acompanhamento Contínuo</p>
                <p className="text-legal-500 text-[11px]">Respostas diligentes e comunicação transparente</p>
              </div>
            </div>

            {/* Central Iconic Scale Visual with Floating Motion */}
            <div className="relative w-full max-w-sm aspect-square my-2 flex items-center justify-center">
              {/* Radial Glow behind scale */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-gold-300/30 via-gold-100/20 to-transparent blur-2xl pointer-events-none" />
              
              {/* Stylized Balance Scale Graphic */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 animate-float-scale">
                <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                  {/* Base and Pedestal */}
                  <ellipse cx="120" cy="216" rx="46" ry="12" fill="#5A3E26" opacity="0.8" />
                  <path d="M78 214C78 206 95 200 120 200C145 200 162 206 162 214C162 218 145 222 120 222C95 222 78 218 78 214Z" fill="url(#bronzeBase)" />
                  <ellipse cx="120" cy="202" rx="36" ry="8" fill="#8C663E" />
                  <rect x="115" y="56" width="10" height="146" rx="5" fill="url(#bronzeColumn)" />
                  <circle cx="120" cy="50" r="14" fill="url(#goldSphere)" />
                  <circle cx="120" cy="30" r="5" fill="#D4AF37" />

                  {/* Top Crossbar */}
                  <path d="M30 64C70 54 170 54 210 64L212 69C170 59 70 59 28 69L30 64Z" fill="url(#goldBar)" />
                  <circle cx="34" cy="67" r="4" fill="#C5A46D" />
                  <circle cx="206" cy="67" r="4" fill="#C5A46D" />

                  {/* Left Pan and Chains */}
                  <line x1="34" y1="67" x2="16" y2="135" stroke="#9A7545" strokeWidth="1.5" />
                  <line x1="34" y1="67" x2="34" y2="135" stroke="#B88B3B" strokeWidth="1.5" />
                  <line x1="34" y1="67" x2="52" y2="135" stroke="#9A7545" strokeWidth="1.5" />
                  <path d="M12 135C12 152 56 152 56 135H12Z" fill="url(#goldPan)" />
                  <ellipse cx="34" cy="135" rx="22" ry="4" fill="#A8823C" />

                  {/* Right Pan and Chains */}
                  <line x1="206" y1="67" x2="188" y2="135" stroke="#9A7545" strokeWidth="1.5" />
                  <line x1="206" y1="67" x2="206" y2="135" stroke="#B88B3B" strokeWidth="1.5" />
                  <line x1="206" y1="67" x2="224" y2="135" stroke="#9A7545" strokeWidth="1.5" />
                  <path d="M184 135C184 152 228 152 228 135H184Z" fill="url(#goldPan)" />
                  <ellipse cx="206" cy="135" rx="22" ry="4" fill="#A8823C" />

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="bronzeBase" x1="78" y1="200" x2="162" y2="222" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6E4D30" />
                      <stop offset="0.5" stopColor="#B38954" />
                      <stop offset="1" stopColor="#513722" />
                    </linearGradient>
                    <linearGradient id="bronzeColumn" x1="115" y1="56" x2="125" y2="202" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#DFCA9B" />
                      <stop offset="0.3" stopColor="#B88B3B" />
                      <stop offset="0.7" stopColor="#7E5526" />
                      <stop offset="1" stopColor="#4A3217" />
                    </linearGradient>
                    <linearGradient id="goldSphere" x1="106" y1="36" x2="134" y2="64" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFF3D6" />
                      <stop offset="0.4" stopColor="#D4AF37" />
                      <stop offset="1" stopColor="#7E5526" />
                    </linearGradient>
                    <linearGradient id="goldBar" x1="30" y1="54" x2="210" y2="69" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#DFCA9B" />
                      <stop offset="0.5" stopColor="#C5A46D" />
                      <stop offset="1" stopColor="#8C663E" />
                    </linearGradient>
                    <linearGradient id="goldPan" x1="12" y1="135" x2="56" y2="152" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#DDBB70" />
                      <stop offset="0.6" stopColor="#A8823C" />
                      <stop offset="1" stopColor="#674423" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <p className="text-xs text-legal-500 italic max-w-xs mt-2">
              &ldquo;A equidade e a ponderação são o alicerce de cada decisão jurídica justa.&rdquo;
            </p>

          </div>

          {/* Right Column (7 Cols): Comprehensive Experience Content & Real Photos */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
                <span className="w-6 h-0.5 bg-gold-500" />
                <span>Sobre a Advogada</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-legal font-bold text-legal-900 tracking-tight leading-tight">
                Nossa ampla <br />
                <span className="text-gold-700 italic font-normal">experiência jurídica</span>
              </h2>
            </div>

            <div className="space-y-4 text-legal-700 text-base sm:text-lg leading-relaxed">
              <p>
                Liderado pela <strong>Advogada Liliana Pontes</strong>, o nosso escritório em Lisboa prima por uma abordagem jurídica diferenciada: aliamos o rigor técnico da advocacia contemporânea à proximidade e empatia necessárias para compreender os objetivos de cada cliente.
              </p>
              <p className="text-sm sm:text-base text-legal-600">
                Seja na prevenção de litígios, em complexas negociações contratuais ou na representação contenciosa perante tribunais, a nossa prática pauta-se pela <em>diligência intransigente</em>, <em>clareza nas orientações</em> e <em>busca constante pela solução mais vantajosa</em>.
              </p>
            </div>

            {/* Key Service Badges with Gold Icons (Matching Reference Design) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-legal-200/80 shadow-sm hover:border-gold-400 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-legal-900 text-sm">Assuntos Jurídicos Corporativos</h4>
                  <p className="text-legal-500 text-xs">Apoio a empresas, contratos e governança</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-legal-200/80 shadow-sm hover:border-gold-400 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-legal-900 text-sm">Direito Civil & Litígios</h4>
                  <p className="text-legal-500 text-xs">Resolução eficaz de disputas e património</p>
                </div>
              </div>
            </div>

            {/* Real Office Photos Cards from Workspace `fotos` */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group relative rounded-2xl overflow-hidden border border-legal-200 shadow-sm bg-legal-100">
                <div className="relative h-44 w-full">
                  <Image
                    src="/images/sala-reunioes-1.png"
                    alt="Sala de Reuniões Privada - Liliana Pontes Advogada Lisboa"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-legal-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-medium text-xs text-gold-300">Gabinete de Lisboa</p>
                    <p className="text-sm font-semibold truncate">Sala de Consultas & Reuniões</p>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-2xl overflow-hidden border border-legal-200 shadow-sm bg-legal-100">
                <div className="relative h-44 w-full">
                  <Image
                    src="/images/gabinete-privado.png"
                    alt="Espaço Executivo de Trabalho - Liliana Pontes Advogada"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-legal-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-medium text-xs text-gold-300">Ambiente Confidencial</p>
                    <p className="text-sm font-semibold truncate">Atendimento Personalizado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA inline */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-sm font-bold text-gold-700 hover:text-gold-800 transition-colors group cursor-pointer"
              >
                <span>Descubra como podemos defender a sua causa</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

        {/* Counter Stats Bar (Matching Reference Visual: Casos, Veredictos, Satisfação, Google) */}
        <div className="mt-16 pt-12 border-t border-legal-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-legal-200/80 shadow-sm hover:shadow-md transition-shadow text-center relative group"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gold-50 text-gold-600 mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-serif-legal font-bold text-legal-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-legal-800 uppercase tracking-wide">
                    {stat.label}
                  </div>
                  <p className="text-[11px] sm:text-xs text-legal-500 mt-2 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
