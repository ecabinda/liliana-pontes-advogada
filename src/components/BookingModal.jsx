'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, Mail, CheckCircle2, MessageSquare, Send } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, selectedArea }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: selectedArea || 'Consultoria Jurídica Geral',
    datePreference: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedArea) {
      setFormData(prev => ({ ...prev, area: selectedArea }));
    }
  }, [selectedArea]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá Dra. Liliana Pontes, gostaria de agendar uma consulta jurídica.\n\nNome: ${formData.name || 'Cliente'}\nÁrea: ${formData.area}\nMensagem: ${formData.message || 'Gostaria de agendar.'}`
    );
    window.open(`https://wa.me/351918651224?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gold-400/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header of Modal */}
        <div className="bg-legal-950 px-6 py-5 text-white flex items-center justify-between border-b border-gold-400/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300 font-serif-legal font-bold text-lg">
              LP
            </div>
            <div>
              <h3 className="font-serif-legal font-bold text-lg text-white">
                Marcar Consulta Jurídica
              </h3>
              <p className="text-gold-300/80 text-xs">
                Dra. Liliana Pontes · Lisboa
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif-legal font-bold text-2xl text-legal-900">
                Pedido Registado
              </h4>
              <p className="text-legal-600 text-sm max-w-sm mx-auto leading-relaxed">
                Entraremos em contacto para confirmar o melhor horário para a sua consulta jurídica.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Acelerar via WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full border border-legal-300 text-legal-800 font-semibold text-xs sm:text-sm hover:bg-legal-50"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-legal-800 uppercase tracking-wider">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-2.5 rounded-xl border border-legal-200 text-sm text-legal-900 focus:border-gold-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-legal-800 uppercase tracking-wider">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="912 345 678"
                    className="w-full px-4 py-2.5 rounded-xl border border-legal-200 text-sm text-legal-900 focus:border-gold-500 outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-legal-800 uppercase tracking-wider">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-legal-200 text-sm text-legal-900 focus:border-gold-500 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-legal-800 uppercase tracking-wider">
                  Área de Consulta
                </label>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-legal-200 text-sm text-legal-900 focus:border-gold-500 outline-none bg-white"
                >
                  <option value="Consultoria Jurídica Geral">Consultoria Jurídica Geral</option>
                  <option value="Direito Civil & Obrigações">Direito Civil & Obrigações</option>
                  <option value="Resolução de Conflitos & Contencioso">Resolução de Conflitos & Contencioso</option>
                  <option value="Direito da Família & Sucessões">Direito da Família & Sucessões</option>
                  <option value="Direito Comercial & Societário">Direito Comercial & Societário</option>
                  <option value="Direito Imobiliário & Arrendamento">Direito Imobiliário & Arrendamento</option>
                  <option value="Direito do Trabalho">Direito do Trabalho</option>
                  <option value="Recuperação de Crédito & Insolvências">Recuperação de Crédito & Insolvências</option>
                  <option value="Nacionalidade & Estrangeiros">Nacionalidade & Estrangeiros</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-legal-800 uppercase tracking-wider">
                  Mensagem / Resumo do Caso
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Informação preliminar sobre o assunto..."
                  className="w-full px-4 py-2.5 rounded-xl border border-legal-200 text-sm text-legal-900 focus:border-gold-500 outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shimmer w-full sm:flex-1 py-3.5 px-6 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-legal-950 font-bold text-sm shadow-md cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'A processar...' : 'Confirmar Pedido de Consulta'}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-full border border-emerald-500/40 text-emerald-700 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-50 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
