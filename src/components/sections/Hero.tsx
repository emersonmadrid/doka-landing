import React from 'react';
import { ArrowUpRight, ArrowDown, Sparkles, MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
import { COMPANY } from '../../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-obsidian text-alabaster overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Warm architectural ambient LED glow */}
      <div
        className="absolute top-0 right-0 w-[650px] h-[650px] bg-amberled-500/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/4 translate-x-1/4"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amberled-600/10 rounded-full blur-[140px] pointer-events-none translate-y-1/3 -translate-x-1/4"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-10 items-center">
          
          {/* Left Column (7 cols on tablet & desktop) */}
          <div className="md:col-span-7 space-y-6 sm:space-y-7 text-center md:text-left">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-amberled-300">
              <MapPin className="w-3.5 h-3.5 text-amberled-400" />
              <span>{COMPANY.location}</span>
            </div>

            {/* Display Headline with fluid clamp() */}
            <h1 className="font-display text-[clamp(2.15rem,1.4rem+3vw,4.1rem)] font-bold tracking-tight leading-[1.08] text-white">
              Diseñamos, construimos y{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amberled-300 via-amberled-400 to-amberled-500">
                transformamos tu espacio.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-ink-light max-w-xl mx-auto md:mx-0 leading-relaxed">
              {COMPANY.description} Especialistas en melamina a medida, construcción en drywall, instalaciones eléctricas y acabados en pintura.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center md:items-stretch lg:items-center justify-center md:justify-start gap-3.5 sm:gap-4 pt-2">
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 lg:px-7 py-4 rounded-xl bg-amberled-500 hover:bg-amberled-400 text-obsidian font-bold text-sm sm:text-base whitespace-nowrap transition-all shadow-[0_0_30px_-5px_rgba(224,159,90,0.45)]"
              >
                <span>Cotizar por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-6 lg:px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-sm sm:text-base whitespace-nowrap transition-all"
              >
                <span>Explorar servicios</span>
                <ArrowDown className="w-4 h-4 text-amberled-400 shrink-0" />
              </a>
            </div>

            {/* Clean Architectural Metrics Strip */}
            <div className="pt-7 mt-4 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 max-w-lg mx-auto md:mx-0">
              <div>
                <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white whitespace-nowrap">+450</div>
                <div className="text-[11px] sm:text-xs text-ink-light mt-0.5">Obras entregadas</div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white whitespace-nowrap">12 meses</div>
                <div className="text-[11px] sm:text-xs text-ink-light mt-0.5">Garantía escrita</div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white whitespace-nowrap">100%</div>
                <div className="text-[11px] sm:text-xs text-ink-light mt-0.5">Diseño a medida</div>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols on tablet & desktop): Crisp Architectural Image */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-sm md:max-w-none">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-espresso">
                <img
                  src="/images/hero-shelf-highres.jpg"
                  alt="Mueble de melamina a medida con iluminación LED cálida 3000K por DoKa"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle vignette gradient for legibility */}
                <div
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Glassmorphic Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-obsidian/75 backdrop-blur-md border border-white/15 flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amberled-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Acabado Arquitectónico</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-white mt-0.5">
                      Melamina RH • Luz LED Cálida • A Medida
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
