import './globals.css';

export const metadata = {
  title: 'Liliana Pontes - Advogada | Escritório em Lisboa (Parque das Nações)',
  description: 'Serviço jurídico competente, diligente e personalizado em Lisboa. Advocacia e soluções jurídicas com foco no cliente. Presença em Lisboa, Póvoa de Varzim, Paris, Hamburgo e São Paulo.',
  keywords: 'Advogada Lisboa, Liliana Pontes, Advogada Parque das Nações, Direito Civil Lisboa, Consultoria Jurídica, Resolução de Conflitos, Direito da Família, Imobiliário',
  authors: [{ name: 'Liliana Pontes' }],
  openGraph: {
    title: 'Liliana Pontes - Advogada | Soluções Jurídicas com Foco no Cliente',
    description: 'Assessoria jurídica diligente, competente e personalizada em Lisboa. Avaliação 4,7 estrelas no Google.',
    url: 'https://www.lilianapontes.com',
    siteName: 'Liliana Pontes - Advogada',
    locale: 'pt_PT',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-legal-cream text-legal-800 antialiased selection:bg-gold-400 selection:text-legal-950">
        {children}
      </body>
    </html>
  );
}
