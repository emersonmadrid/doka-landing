import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { PROJECTS, COMPANY } from '../../data/content';
import { ArrowUpRight, MapPin } from 'lucide-react';

export const Projects: React.FC = () => {
  const bentoSpans = [
    'md:col-span-7 h-[280px] sm:h-[320px] lg:h-[380px]',
    'md:col-span-5 h-[280px] sm:h-[320px] lg:h-[380px]',
    'md:col-span-5 h-[280px] sm:h-[320px] lg:h-[360px]',
    'md:col-span-7 h-[280px] sm:h-[320px] lg:h-[360px]',
  ];

  return (
    <section id="proyectos" className="bg-sand py-20 sm:py-28 border-y border-ink/5 scroll-mt-16">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="OBRAS SELECCIONADAS"
            title={
              <>
                Proyectos reales ejecutados{' '}
                <span className="text-amberled-600">en Lima.</span>
              </>
            }
            description="Cada ambiente es diseñado y fabricado con precisión milimétrica, iluminación cálida y materiales durables."
          />

          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-amberled-600 transition-colors shrink-0 self-start md:self-end"
          >
            <span>Solicitar catálogo completo</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Strict 12-column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {PROJECTS.map((project, idx) => (
            <a
              key={project.id}
              href={`https://wa.me/${COMPANY.phoneClean}?text=${encodeURIComponent(
                `¡Hola DoKa! Vi en su web el proyecto: *${project.title}* (${project.location}). Me gustaría cotizar algo similar.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl overflow-hidden bg-obsidian border border-ink/10 shadow-md block ${
                bentoSpans[idx] || 'md:col-span-6 h-[340px]'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/40 to-obsidian/10 transition-opacity"
                aria-hidden="true"
              />

              {/* Top Location Pill */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-obsidian/75 backdrop-blur-md border border-white/15 text-xs font-medium text-white">
                <MapPin className="w-3.5 h-3.5 text-amberled-400" />
                <span>{project.location}</span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amberled-400 block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                    {project.title}
                  </h3>
                </div>

                <span className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-amberled-500 text-white group-hover:text-obsidian backdrop-blur-md border border-white/20 group-hover:border-amberled-500 flex items-center justify-center shrink-0 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};
