import React from 'react';
import { Container } from '../ui/Container';
import { COMPANY } from '../../data/content';
import { ArrowUpRight, Phone, MapPin } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contacto" className="relative bg-obsidian text-white py-20 sm:py-28 overflow-hidden scroll-mt-16">
      {/* Subtle warm radial LED glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amberled-500/15 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-amberled-300">
            <MapPin className="w-3.5 h-3.5 text-amberled-400" />
            <span>{COMPANY.location}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight text-white">
            ¿Listo para transformar tu espacio con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amberled-300 to-amberled-500">
              calidad y estilo?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-ink-light max-w-xl mx-auto leading-relaxed">
            Cuéntanos tu idea por WhatsApp o llámanos directamente. Atendemos casas, departamentos, oficinas y locales comerciales en toda Lima.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amberled-500 hover:bg-amberled-400 text-obsidian font-bold text-sm sm:text-base transition-all shadow-[0_0_30px_-5px_rgba(224,159,90,0.45)]"
            >
              <span>Escribir al WhatsApp ({COMPANY.phone})</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${COMPANY.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-sm sm:text-base transition-all"
            >
              <Phone className="w-4 h-4 text-amberled-400" />
              <span>Llamar: {COMPANY.phone}</span>
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
};
