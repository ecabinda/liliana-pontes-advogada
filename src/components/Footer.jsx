'use client';

import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Scale, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-legal-950 text-gray-300 border-t border-gold-400/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Identity & Ethos (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border border-gold-400/40 bg-legal-800 flex items-center justify-center text-gold-300 font-serif-legal font-bold text-xl">
                LP
              </div>
              <div>
                <span className="text-white font-serif-legal text-xl font-bold block">
                  Liliana Pontes
                </span>
                <span className="text-gold-400 text-xs tracking-widest uppercase block font-semibold">
                  Advogada
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Advocacia contemporânea com rigor deontológico, proximidade e dedicação intransigente. Soluções jurídicas estratégicas com foco no cliente.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-gold-300/80">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Inscrita na Ordem dos Advogados Portugueses</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-serif-legal font-bold text-base tracking-wide border-b border-white/10 pb-2">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-gold-300 transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-gold-300 transition-colors">Sobre a Advogada</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-gold-300 transition-colors">Áreas de Atuação</a>
              </li>
              <li>
                <a href="#escritorio" className="hover:text-gold-300 transition-colors">O Escritório</a>
              </li>
              <li>
                <a href="#testemunhos" className="hover:text-gold-300 transition-colors">Testemunhos</a>
              </li>
              <li>
                <a href="#contactos" className="hover:text-gold-300 transition-colors">Contactos & Marcações</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif-legal font-bold text-base tracking-wide border-b border-white/10 pb-2">
              Áreas Principais
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>Direito Civil & Contratos</li>
              <li>Resolução de Conflitos & Litígios</li>
              <li>Direito da Família & Sucessões</li>
              <li>Direito Comercial & Societário</li>
              <li>Direito Imobiliário & Arrendamento</li>
              <li>Recuperação de Crédito & Insolvências</li>
            </ul>
          </div>

          {/* Col 4: Direct Office Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif-legal font-bold text-base tracking-wide border-b border-white/10 pb-2">
              Sede Lisboa
            </h4>
            
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Av. Dom João II 2, 1990-044 Lisboa (Parque das Nações)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:918651224" className="hover:text-gold-300 font-semibold transition-colors">
                  918 651 224
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:advogada@lilianapontes.com" className="hover:text-gold-300 transition-colors break-all">
                  advogada@lilianapontes.com
                </a>
              </div>

              <div className="pt-2 text-[11px] text-gray-400">
                Horário: 2ª a 6ª feira a partir das 08:00
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Ethics & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          
          <div className="text-center sm:text-left space-y-1">
            <p>
              &copy; {new Date().getFullYear()} Dra. Liliana Pontes - Advogada. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-gray-500">
              Informação disponibilizada no estrito respeito pelas normas deontológicas da Ordem dos Advogados Portugueses.
            </p>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 hover:border-gold-400/40 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold-400" />
          </button>

        </div>

      </div>
    </footer>
  );
}
