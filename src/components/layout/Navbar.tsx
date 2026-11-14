import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
import { COMPANY } from '../../data/content';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Garantía', href: '#garantia' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-obsidian/90 backdrop-blur-md border-b border-white/10">
      <Container className="h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amberled-400 to-amberled-600 flex items-center justify-center shadow-md shrink-0">
            <svg viewBox="0 0 100 100" className="w-6 h-6">
              <circle cx="50" cy="50" r="38" fill="none" stroke="#110E0C" strokeWidth="6" />
              <path d="M 32,52 C 32,41 41,34 50,34 C 59,34 68,41 68,52 C 68,63 59,70 50,70 C 41,70 32,63 32,52" fill="none" stroke="#110E0C" strokeWidth="5" strokeLinecap="round" />
              <path d="M 41,51 C 41,46 45,42 50,42 C 55,42 59,46 59,51 C 59,56 55,60 50,60 C 45,60 41,56 41,51" fill="none" stroke="#110E0C" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-tight text-white leading-none">
              {COMPANY.name}
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase font-medium text-amberled-400 mt-1">
              {COMPANY.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-light hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-ink-light">
            <MapPin className="w-3.5 h-3.5 text-amberled-400" />
            <span>Lima Metropolitana</span>
          </div>
          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-amberled-500 hover:bg-amberled-400 text-obsidian font-semibold text-sm transition-all shadow-[0_0_20px_-5px_rgba(224,159,90,0.45)]"
          >
            <span>Cotizar ahora</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-ink-light hover:text-white hover:bg-white/10 transition-colors"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-espresso border-b border-white/10 px-4 py-6 animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-base font-medium text-alabaster hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-amberled-500 text-obsidian font-bold text-sm"
            >
              <span>Cotizar por WhatsApp ({COMPANY.phone})</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
