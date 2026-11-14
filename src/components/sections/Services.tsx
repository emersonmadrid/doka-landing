import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SERVICES, COMPANY } from '../../data/content';
import { LayoutGrid, Layers, Zap, Paintbrush, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  melamina: LayoutGrid,
  drywall: Layers,
  electricidad: Zap,
  pintura: Paintbrush,
};

export const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);
  const activeService = SERVICES.find((s) => s.id === activeId) || SERVICES[0];

  return (
    <section id="servicios" className="bg-alabaster py-20 sm:py-28 scroll-mt-16">
      <Container>
        <SectionHeading
          eyebrow="NUESTROS SERVICIOS"
          title={
            <>
              Especialistas en transformar{' '}
              <span className="text-amberled-600">cada ambiente.</span>
            </>
          }
          description="Selecciona una especialidad para conocer el alcance técnico, materiales y acabados que ejecutamos en hogares, oficinas y locales comerciales."
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Mobile & Tablet Compact 2x2 / 4-col Selector (visible < lg) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:hidden gap-2.5">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.id] || LayoutGrid;
              const isActive = service.id === activeId;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveId(service.id)}
                  aria-pressed={isActive}
                  className={`text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col gap-2 ${
                    isActive
                      ? 'bg-obsidian text-white border-obsidian shadow-md'
                      : 'bg-white hover:bg-sand/70 text-ink border-ink/10'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-amberled-500 text-obsidian' : 'bg-sand text-amberled-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[10px] font-bold tracking-wider ${
                        isActive ? 'text-amberled-400' : 'text-ink-muted'
                      }`}
                    >
                      {service.number}
                    </span>
                  </div>
                  <span
                    className={`font-display text-xs sm:text-sm font-bold leading-snug ${
                      isActive ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop Left Column (5 cols): Full Interactive Service Tabs (visible >= lg) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.id] || LayoutGrid;
              const isActive = service.id === activeId;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveId(service.id)}
                  aria-pressed={isActive}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                    isActive
                      ? 'bg-obsidian text-white border-obsidian shadow-xl'
                      : 'bg-white hover:bg-sand/70 text-ink border-ink/10 hover:border-amberled-500/50'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-amberled-500 text-obsidian'
                        : 'bg-sand text-amberled-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[11px] font-bold tracking-wider uppercase ${
                          isActive ? 'text-amberled-400' : 'text-ink-muted'
                        }`}
                      >
                        Servicio {service.number}
                      </span>
                    </div>
                    <h3
                      className={`font-display text-lg font-bold mt-0.5 ${
                        isActive ? 'text-white' : 'text-ink'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-xs mt-1 line-clamp-2 leading-relaxed ${
                        isActive ? 'text-ink-light' : 'text-ink-muted'
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column (7 cols): Live Active Service Detail Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-ink/10 overflow-hidden shadow-lg">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-obsidian">
              <img
                key={activeService.image}
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover animate-fadeIn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-obsidian/80 backdrop-blur-md text-amberled-300 text-xs font-semibold border border-white/10">
                  {activeService.number} • Especialidad DoKa
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                  {activeService.title}
                </h3>
                <p className="text-sm sm:text-base text-ink-muted mt-2 leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Technical Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-ink/10">
                {activeService.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-ink font-medium bg-alabaster p-3 rounded-xl border border-ink/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amberled-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <a
                  href={`https://wa.me/${COMPANY.phoneClean}?text=${encodeURIComponent(
                    `¡Hola DoKa! Me interesa cotizar el servicio de *${activeService.title}*.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-obsidian hover:bg-walnut text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <span>Cotizar {activeService.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-amberled-400" />
                </a>

                <span className="text-xs text-ink-muted text-center sm:text-right">
                  Asesoría técnica y toma de medidas en Lima
                </span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
