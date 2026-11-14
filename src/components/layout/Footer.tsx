import React from 'react';
import { Container } from '../ui/Container';
import { COMPANY, SERVICES } from '../../data/content';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso text-ink-light pt-16 pb-10 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amberled-400 to-amberled-600 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 100 100" className="w-5 h-5">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#110E0C" strokeWidth="6" />
                  <path d="M 32,52 C 32,41 41,34 50,34 C 59,34 68,41 68,52 C 68,63 59,70 50,70 C 41,70 32,63 32,52" fill="none" stroke="#110E0C" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 41,51 C 41,46 45,42 50,42 C 55,42 59,46 59,51 C 59,56 55,60 50,60 C 45,60 41,56 41,51" fill="none" stroke="#110E0C" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white block leading-none">
                  {COMPANY.name}
                </span>
                <span className="text-[10px] tracking-[0.18em] uppercase font-medium text-amberled-400">
                  {COMPANY.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed max-w-sm">
              {COMPANY.description}
            </p>
          </div>

          {/* Services (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Servicios
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#servicios" className="hover:text-amberled-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contacto Directo
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-amberled-400 hover:text-amberled-300 transition-colors"
                >
                  <span>WhatsApp: {COMPANY.phone}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>{COMPANY.location}</li>
              <li className="pt-1 flex items-center gap-4">
                <a
                  href={COMPANY.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook / DoKa
                </a>
                <a
                  href={COMPANY.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  TikTok / @DoKa
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ink-muted">
          <p>© {new Date().getFullYear()} {COMPANY.name}. Todos los derechos reservados.</p>
          <p>Lima Metropolitana, Perú</p>
        </div>
      </Container>
    </footer>
  );
};
