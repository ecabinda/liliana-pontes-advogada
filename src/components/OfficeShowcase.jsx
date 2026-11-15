'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Globe, Shield, Sparkles, Building, Phone, Mail, Clock } from 'lucide-react';

export default function OfficeShowcase() {
  const [selectedImage, setSelectedImage] = useState(0);

  const gallery = [
    {
      src: '/images/fachada-escritorio.png',
      title: 'Fachada & Escritório em Lisboa',
      subtitle: 'Av. Dom João II 2, Parque das Nações',
      desc: 'Localização privilegiada na zona nobre de Lisboa, com acessos diretos, facilidade de estacionamento e transportes.',
      tag: 'Sede Lisboa'
    },
    {
      src: '/images/porta-logotipo.png',
      title: 'Identidade & Sinalética Oficial',
      subtitle: 'Entrada Principal e Gabinete',
      desc: 'Transparência, formalidade e dedicação exclusiva. Atendimento presencial sob marcação prévia para total discrição.',
      tag: 'Gabinete Oficial'
    },
    {
      src: '/images/sala-reunioes-1.png',
      title: 'Sala de Conferências & Reuniões',
      subtitle: 'Consultas Jurídicas Confidenciais',
      desc: 'Espaço requintado preparado para acolhimento de clientes, negociações estratégicas e reuniões de trabalho em sigilo absoluto.',
      tag: 'Privacidade'
    },
    {
      src: '/images/gabinete-privado.png',
      title: 'Espaço Executivo de Trabalho',
      subtitle: 'Ambiente de Análise e Estudo Forense',
      desc: 'Estrutura técnica moderna com ferramentas digitais avançadas para acompanhamento rigoroso de processos e litígios.',
      tag: 'Infraestrutura'
    },
    {
      src: '/images/polos-internacionais.png',
      title: 'Rede de Polos & Parcerias Internacionais',
      subtitle: 'Portugal, França, Alemanha e Brasil',
      desc: 'Capacidade de assistência jurídica além-fronteiras com correspondentes e representações em cidades estratégicas mundiais.',
      tag: 'Internacional'
    }
  ];

  const locations = [
    { city: 'Lisboa', country: 'Portugal', role: 'Sede Principal · Parque das Nações', active: true },
    { city: 'Póvoa de Varzim', country: 'Portugal', role: 'Polo Norte', active: false },
    { city: 'Paris', country: 'França', role: 'Representação Internacional', active: false },
    { city: 'Hamburgo', country: 'Alemanha', role: 'Representação Internacional', active: false },
    { city: 'São Paulo', country: 'Brasil', role: 'Representação Internacional', active: false },
  ];

  return (
    <section id="escritorio" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
            <Building className="w-4 h-4 text-gold-500" />
            <span>Infraestrutura & Presença</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-legal font-bold text-legal-900 tracking-tight">
            O Nosso Espaço em Lisboa & <br />
            <span className="text-gold-700 font-normal italic">Alcance Internacional</span>
          </h2>

          <p className="text-legal-600 text-sm sm:text-base leading-relaxed">
            Conheça as instalações onde analisamos minuciosamente o seu caso. Um ambiente pensado para garantir conforto, confidencialidade e máxima eficácia jurídica.
          </p>
        </div>

        {/* Interactive Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Selected Image Showcase (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-5 rounded-3xl border border-legal-200/90 shadow-md">
            <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-legal-900 group">
              <Image
                src={gallery[selectedImage].src}
                alt={gallery[selectedImage].title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-legal-950/85 via-legal-950/20 to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-legal-950/80 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs font-semibold">
                  {gallery[selectedImage].tag}
                </span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg sm:text-xl font-serif-legal font-bold text-white mb-1">
                  {gallery[selectedImage].title}
                </h3>
                <p className="text-gold-300/90 text-xs sm:text-sm font-medium mb-1">
                  {gallery[selectedImage].subtitle}
                </p>
                <p className="text-gray-300 text-xs leading-relaxed hidden sm:block">
                  {gallery[selectedImage].desc}
                </p>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-5 gap-2.5 mt-4">
              {gallery.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImage === idx
                      ? 'border-gold-500 scale-[1.03] shadow-md ring-2 ring-gold-400/30'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Office Credentials & Network (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Feature Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-legal-200/90 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center text-gold-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-legal font-bold text-lg text-legal-900">
                    Sede em Lisboa
                  </h4>
                  <p className="text-xs text-legal-500">Parque das Nações (Zona Expo)</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-legal-700 border-t border-legal-100 pt-4">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-legal-900 shrink-0">Morada:</span>
                  <span>Av. Dom João II 2, 1990-044 Lisboa</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-legal-900 shrink-0">Telefone:</span>
                  <a href="tel:918651224" className="text-gold-700 font-bold hover:underline">
                    918 651 224
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-legal-900 shrink-0">Horário:</span>
                  <span>Segunda a Sexta, a partir das 08:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-legal-900 shrink-0">Email:</span>
                  <a href="mailto:advogada@lilianapontes.com" className="text-gold-700 hover:underline">
                    advogada@lilianapontes.com
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-gold-50/70 border border-gold-200/70 text-xs text-legal-700 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Atendimento personalizado e com hora marcada para total resguardo e conforto.</span>
              </div>
            </div>

            {/* International Presence Box */}
            <div className="bg-legal-900 rounded-3xl p-6 sm:p-7 text-white border border-gold-400/20 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-400/30 flex items-center justify-center text-gold-300">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-legal font-bold text-lg text-white">
                    Polos de Cooperação
                  </h4>
                  <p className="text-xs text-gold-300/80">Conexões transfronteiriças</p>
                </div>
              </div>

              <div className="divide-y divide-white/10 text-xs">
                {locations.map((loc, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-gray-100">{loc.city}</span>
                      <span className="text-gray-400 ml-1.5">({loc.country})</span>
                    </div>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                      loc.active 
                        ? 'bg-gold-500 text-legal-950 font-bold' 
                        : 'bg-white/10 text-gray-300'
                    }`}>
                      {loc.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
