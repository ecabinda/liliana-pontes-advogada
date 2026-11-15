'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Calendar,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function ContactSection({ prefilledArea }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: prefilledArea || 'Consultoria Jurídica Geral',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission with immediate elegant feedback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Olá Dra. Liliana Pontes, gostaria de agendar uma consulta jurídica.\n\nNome: ${formData.name || 'Cliente'}\nÁrea de Interesse: ${formData.area}\nMensagem: ${formData.message || 'Gostaria de mais informações.'}`
    );
    window.open(`https://wa.me/351918651224?text=${text}`, '_blank');
  };

  return (
    <section id="contactos" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-gold-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
            <Calendar className="w-4 h-4 text-gold-500" />
            <span>Marcações & Contacto Direto</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-legal font-bold text-legal-900 tracking-tight">
            Fale com a{' '}
            <span className="text-gold-700 italic font-normal">Dra. Liliana Pontes</span>
          </h2>

          <p className="text-legal-600 text-sm sm:text-base leading-relaxed">
            Agende a sua consulta jurídica com total comodidade. Estamos disponíveis para o receber no nosso escritório em Lisboa ou prestar assessoria por videoconferência.
          </p>
        </div>

        {/* Contact Grid: Details & Map (Left 5 Cols) | Interactive Form (Right 7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contacts & Map Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-legal-200/90 shadow-sm space-y-6">
              <h3 className="font-serif-legal font-bold text-2xl text-legal-900">
                Informações de Contacto
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:918651224"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-legal-50 hover:bg-gold-50/60 border border-legal-200/60 hover:border-gold-300 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-700 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-legal-500 uppercase tracking-wider block">
                      Telefone & Chamada Direta
                    </span>
                    <span className="text-lg font-bold text-legal-900 group-hover:text-gold-700 transition-colors">
                      918 651 224
                    </span>
                    <span className="text-[11px] text-emerald-600 font-medium block mt-0.5">
                      Ligação direta disponível
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:advogada@lilianapontes.com"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-legal-50 hover:bg-gold-50/60 border border-legal-200/60 hover:border-gold-300 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-700 group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-legal-500 uppercase tracking-wider block">
                      Endereço de Email
                    </span>
                    <span className="text-base font-bold text-legal-900 group-hover:text-gold-700 transition-colors break-all">
                      advogada@lilianapontes.com
                    </span>
                    <span className="text-[11px] text-legal-500 block mt-0.5">
                      Resposta habitual em 24h úteis
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-legal-50 border border-legal-200/60">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-legal-500 uppercase tracking-wider block">
                      Morada do Escritório
                    </span>
                    <span className="text-sm font-bold text-legal-900 block">
                      Av. Dom João II 2
                    </span>
                    <span className="text-xs text-legal-600 block">
                      1990-044 Lisboa, Parque das Nações
                    </span>
                    <a
                      href="https://maps.google.com/?q=Av.+Dom+João+II+2,+1990-044+Lisboa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-gold-700 font-bold hover:underline mt-1"
                    >
                      <span>Abrir no Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-legal-50 border border-legal-200/60">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-legal-500 uppercase tracking-wider block">
                      Horário de Funcionamento
                    </span>
                    <span className="text-sm font-bold text-legal-900 block">
                      Segunda a Sexta-feira
                    </span>
                    <span className="text-xs text-emerald-700 font-semibold block mt-0.5">
                      Aberto a partir das 08:00
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Card Preview */}
            <div className="bg-white rounded-3xl overflow-hidden border border-legal-200/90 shadow-sm">
              <div className="p-4 bg-legal-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span className="text-xs font-semibold">Parque das Nações · Lisboa</span>
                </div>
                <span className="text-[11px] text-gold-300">Zona Nobre Expo</span>
              </div>
              <div className="relative h-48 w-full bg-legal-100">
                <iframe
                  title="Localização Liliana Pontes Advogada Lisboa"
                  src="https://maps.google.com/maps?q=Av.+Dom+Joao+II+2,+1990-044+Lisboa&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale-[20%] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Appointment & Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-legal-200/90 shadow-md">
            
            {submitted ? (
              <div className="py-12 px-6 text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-legal font-bold text-2xl sm:text-3xl text-legal-900">
                  Mensagem Enviada com Sucesso
                </h3>
                <p className="text-legal-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  Obrigado pelo seu contacto. A <strong>Dra. Liliana Pontes</strong> e a sua equipa analisarão o seu pedido e responderão com a máxima brevidade e sigilo.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Falar Já no WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-legal-300 text-legal-800 text-sm font-semibold hover:bg-legal-50 transition-colors"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif-legal font-bold text-2xl text-legal-900">
                      Marcar Consulta / Pedido de Contacto
                    </h3>
                    <span className="text-[11px] text-gold-700 font-semibold bg-gold-50 px-2.5 py-1 rounded-full border border-gold-200">
                      Sigilo Garantido
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-legal-500">
                    Preencha o formulário abaixo para uma resposta rápida e personalizada.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-legal-800 uppercase tracking-wider">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: João da Silva"
                      className="w-full px-4 py-3 rounded-xl border border-legal-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm text-legal-900 outline-none transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-legal-800 uppercase tracking-wider">
                      Contacto Telefónico *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ex: 912 345 678"
                      className="w-full px-4 py-3 rounded-xl border border-legal-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm text-legal-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-legal-800 uppercase tracking-wider">
                      Endereço de Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seuemail@exemplo.com"
                      className="w-full px-4 py-3 rounded-xl border border-legal-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm text-legal-900 outline-none transition-all"
                    />
                  </div>

                  {/* Practice Area Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-legal-800 uppercase tracking-wider">
                      Área de Interesse Jurídico
                    </label>
                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-legal-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm text-legal-900 outline-none transition-all bg-white"
                    >
                      <option value="Consultoria Jurídica Geral">Consultoria Jurídica Geral</option>
                      <option value="Direito Civil & Obrigações">Direito Civil & Obrigações</option>
                      <option value="Resolução de Conflitos & Litígios">Resolução de Conflitos & Litígios</option>
                      <option value="Direito da Família & Sucessões">Direito da Família & Sucessões</option>
                      <option value="Direito Comercial & Societário">Direito Comercial & Societário</option>
                      <option value="Direito Imobiliário & Arrendamento">Direito Imobiliário & Arrendamento</option>
                      <option value="Direito do Trabalho & Laboral">Direito do Trabalho & Laboral</option>
                      <option value="Recuperação de Crédito & Insolvências">Recuperação de Crédito & Insolvências</option>
                      <option value="Nacionalidade & Vistos / Estrangeiros">Nacionalidade & Vistos / Estrangeiros</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-legal-800 uppercase tracking-wider">
                    Data ou Período Preferencial (Opcional)
                  </label>
                  <input
                    type="text"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    placeholder="Ex: Próxima semana, período da manhã"
                    className="w-full px-4 py-3 rounded-xl border border-legal-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm text-legal-900 outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-legal-800 uppercase tracking-wider">
                    Breve Descrição do Caso ou Mensagem *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva sumariamente a sua situação ou dúvida jurídica..."
                    className="w-full px-4 py-3 rounded-xl border border-legal-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm text-legal-900 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-shimmer w-full sm:flex-1 py-4 px-8 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-legal-950 font-bold text-sm sm:text-base shadow-lg shadow-gold-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>A enviar...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Pedido de Consulta</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto py-4 px-6 rounded-full border border-emerald-500/40 hover:bg-emerald-50 text-emerald-700 font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-legal-400 text-center">
                  Os seus dados estão protegidos ao abrigo do dever estatutário de sigilo profissional dos advogados e do RGPD.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
