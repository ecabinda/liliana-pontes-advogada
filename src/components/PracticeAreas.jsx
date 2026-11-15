'use client';

import React, { useState } from 'react';
import { 
  Briefcase, 
  FileText, 
  Scale, 
  HeartHandshake, 
  Home, 
  Building2, 
  Users2, 
  ShieldAlert, 
  Globe2, 
  ArrowRight,
  Check
} from 'lucide-react';

export default function PracticeAreas({ onSelectArea }) {
  const [activeFilter, setActiveFilter] = useState('todas');

  const areas = [
    {
      id: 'consultoria',
      title: 'Consultoria Jurídica',
      category: 'corporativo',
      icon: Briefcase,
      badge: 'Preventivo & Estratégico',
      description: 'Orientação jurídica contínua e emissão de pareceres rigorosos para particulares e empresas, prevenindo contingências legais.',
      features: [
        'Análise preventiva de riscos e due diligence',
        'Emissão de pareceres jurídicos fundamentados',
        'Assessoria contínua para negócios e particulares'
      ]
    },
    {
      id: 'civil',
      title: 'Direito Civil & Obrigações',
      category: 'geral',
      icon: Scale,
      badge: 'Atuação Principal',
      description: 'Defesa intransigente dos seus direitos patrimoniais, contratos civis, responsabilidade civil e pedidos de indemnização.',
      features: [
        'Elaboração e revisão minuciosa de contratos',
        'Ações de responsabilidade civil e indemnizações',
        'Cumprimento e resolução de obrigações contratuais'
      ]
    },
    {
      id: 'conflitos',
      title: 'Resolução de Conflitos & Contencioso',
      category: 'geral',
      icon: HeartHandshake,
      badge: 'Mediação & Judicial',
      description: 'Abordagem pragmática que prioriza a mediação e conciliação, assegurando representação técnica firme perante os tribunais.',
      features: [
        'Mediação e negociação extrajudicial estratégica',
        'Ações judiciais nos tribunais cíveis e criminais',
        'Defesa e interposição de providências cautelares'
      ]
    },
    {
      id: 'familia',
      title: 'Direito da Família & Sucessões',
      category: 'particular',
      icon: Users2,
      badge: 'Cuidado & Discrição',
      description: 'Acompanhamento sensível e humanizado em processos familiares complexos, partilhas de bens e planeamento sucessório.',
      features: [
        'Divórcios por mútuo consentimento e litigiosos',
        'Regulação das responsabilidades parentais (guarda/alimentos)',
        'Partilhas de heranças, testamentos e inventários'
      ]
    },
    {
      id: 'comercial',
      title: 'Direito Comercial & Societário',
      category: 'corporativo',
      icon: Building2,
      badge: 'Empresarial',
      description: 'Apoio integral a empresários e sociedades comerciais, desde a constituição até à governação e resolução de disputas societárias.',
      features: [
        'Constituição de empresas e atas societárias',
        'Acordos parassociais e contratos comerciais',
        'Reestruturação, fusões e assessoria contínua'
      ]
    },
    {
      id: 'imobiliario',
      title: 'Direito Imobiliário & Arrendamento',
      category: 'particular',
      icon: Home,
      badge: 'Investimento & Habitação',
      description: 'Segurança absoluta em transações imobiliárias em Lisboa e Portugal, contratos de compra e venda, e gestão de arrendamentos.',
      features: [
        'Due diligence imobiliária e apoio na escritura (CPCV)',
        'Contratos de arrendamento habitacional e comercial',
        'Ações de despejo e resolução de litígios de arrendamento'
      ]
    },
    {
      id: 'trabalho',
      title: 'Direito do Trabalho',
      category: 'corporativo',
      icon: FileText,
      badge: 'Relações Laborais',
      description: 'Assessoria a entidades patronais e trabalhadores na gestão de contratos laborais, processos disciplinares e cessação contratual.',
      features: [
        'Contratação de trabalho e regimes específicos',
        'Cessação de contratos e cálculo de indemnizações',
        'Impugnação de despedimentos e créditos laborais'
      ]
    },
    {
      id: 'credito',
      title: 'Recuperação de Crédito & Insolvências',
      category: 'geral',
      icon: ShieldAlert,
      badge: 'Patrimonial',
      description: 'Mecanismos rápidos de cobrança de dívidas, procedimentos de injunção, penhoras de património e processos de insolvência.',
      features: [
        'Cobrança coerciva e procedimentos de injunção',
        'Processos executivos e localização de bens',
        'Acompanhamento de insolvências singulares e coletivas'
      ]
    },
    {
      id: 'internacional',
      title: 'Nacionalidade & Estrangeiros',
      category: 'particular',
      icon: Globe2,
      badge: 'Internacional',
      description: 'Apoio a cidadãos e investidores internacionais na obtenção de residência, vistos e aquisição de nacionalidade portuguesa.',
      features: [
        'Processos de atribuição e aquisição de nacionalidade',
        'Vistos de residência (D7, D8 Nómadas Digitais, Golden Visa)',
        'Transição e acolhimento legal de cidadãos em Portugal'
      ]
    }
  ];

  const filteredAreas = activeFilter === 'todas'
    ? areas
    : areas.filter(a => a.category === activeFilter);

  return (
    <section id="areas" className="py-20 lg:py-28 bg-[#1A1613] text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-legal-700/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-400">
            <span className="w-8 h-0.5 bg-gold-400" />
            <span>Especialidades Jurídicas</span>
            <span className="w-8 h-0.5 bg-gold-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-legal font-bold tracking-tight">
            Áreas de Atuação &{' '}
            <span className="gold-gradient-text">Soluções Dedicadas</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Oferecemos uma resposta jurídica completa, técnica e orientada a resultados concretos. Conheça as nossas principais vertentes de intervenção.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'todas', label: 'Todas as Áreas' },
              { id: 'geral', label: 'Direito Civil & Litígios' },
              { id: 'corporativo', label: 'Empresas & Negócios' },
              { id: 'particular', label: 'Particulares & Família' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-gold-500 text-legal-950 shadow-md shadow-gold-500/20'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.id}
                className="card-spotlight group rounded-2xl p-7 bg-legal-900/90 border border-gold-400/20 hover:border-gold-400/50 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500/20 group-hover:text-gold-300 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-gold-300/80 bg-gold-400/10 px-2.5 py-1 rounded-full border border-gold-400/20">
                      {area.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif-legal font-bold text-white group-hover:text-gold-200 transition-colors mb-3">
                    {area.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6 border-t border-white/10 pt-4">
                    {area.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectArea(area.title)}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl border border-gold-400/30 hover:border-gold-300 bg-white/5 hover:bg-gold-500 hover:text-legal-950 text-gold-300 text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Global Bottom Prompt Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-legal-800 via-legal-900 to-legal-800 border border-gold-400/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg sm:text-xl font-serif-legal font-bold text-white">
              Não encontra a sua situação específica?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Cada caso possui particularidades únicas. Contacte-nos diretamente para uma análise confidencial.
            </p>
          </div>
          <button
            onClick={() => onSelectArea('Outra Área / Consulta Geral')}
            className="btn-shimmer shrink-0 px-6 py-3 rounded-full bg-gold-400 hover:bg-gold-300 text-legal-950 font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all cursor-pointer"
          >
            Apresentar o Meu Caso
          </button>
        </div>

      </div>
    </section>
  );
}
