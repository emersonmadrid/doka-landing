import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { GUARANTEES, COMPANY } from '../../data/content';
import { ShieldCheck, Clock, HardHat, ThumbsUp, ArrowUpRight } from 'lucide-react';

const guaranteeIcons = [ShieldCheck, Clock, HardHat, ThumbsUp];

export const Guarantees: React.FC = () => {
  return (
    <section id="garantia" className="bg-alabaster py-20 sm:py-28 scroll-mt-16">
      <Container>
        <SectionHeading
          eyebrow="NUESTRO RESPALDO"
          title={
            <>
              Por qué los clientes en Lima{' '}
              <span className="text-amberled-600">confían en DoKa.</span>
            </>
          }
          description="Trabajamos bajo cuatro compromisos formales que garantizan la durabilidad, puntualidad y limpieza de cada proyecto."
          className="mb-12 sm:mb-16"
        />

        {/* 4-Column Aligned Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUARANTEES.map((g, idx) => {
            const Icon = guaranteeIcons[idx] || ShieldCheck;
            return (
              <div
                key={g.number}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-ink/10 hover:border-amberled-500/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sand group-hover:bg-obsidian text-amberled-600 group-hover:text-amberled-400 flex items-center justify-center transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-ink mb-2">
                    {g.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {g.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-ink/5 text-[11px] font-bold uppercase tracking-wider text-amberled-600">
                  Garantía DoKa
                </div>
              </div>
            );
          })}
        </div>

        {/* Aligned Technical Visit Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-obsidian text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10 shadow-xl">
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
              Agenda una visita técnica de evaluación en Lima
            </h4>
            <p className="text-sm text-ink-light">
              Tomamos medidas exactas, revisamos puntos eléctricos y te entregamos un presupuesto claro sin sorpresas.
            </p>
          </div>

          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amberled-500 hover:bg-amberled-400 text-obsidian font-bold text-sm transition-colors shrink-0 w-full md:w-auto"
          >
            <span>Agendar visita técnica</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </section>
  );
};
