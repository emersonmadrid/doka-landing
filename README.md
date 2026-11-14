# DoKa — Landing Page Profesional

Landing page de alta conversión para **DoKa** (*Diseño y Transformación*), estudio especializado en diseño y armado de muebles en melamina a medida, construcción en drywall, servicios eléctricos certificados y acabados en pintura en Lima Metropolitana.

## 🚀 Stack Tecnológico

- **React 19** + **TypeScript** (Strict Mode)
- **Vite 6** (Bundling ultraligero y HMR instantáneo)
- **Tailwind CSS** (Paleta editorial lino cálido, coñac teca y bronce oscuro)
- **Lucide React** (Iconos vectoriales ligeros)

## 📁 Arquitectura Limpia

```text
src/
├── types/index.ts                 # Interfaces de dominio (Service, Project, Guarantee)
├── data/content.ts                # Única fuente de verdad (Single Source of Truth)
├── utils/                         # cn.ts, whatsapp.ts
├── components/
│   ├── ui/                        # Container, SectionHeading, Button
│   ├── layout/                    # Navbar, Footer
│   └── sections/
│       ├── Hero.tsx               # Portada editorial con ticker de 4 pilares
│       ├── Services.tsx           # Los 4 servicios del volante (Melamina, Drywall, Electricidad, Pintura)
│       ├── Projects.tsx           # 4 obras destacadas con ubicación en Lima
│       ├── Guarantees.tsx         # 4 garantías por escrito y llamado a visita técnica
│       └── ContactCTA.tsx         # Conversión directa a WhatsApp (+51 932 375 092)
├── App.tsx                        # Orquestador limpio
└── main.tsx
```

## 🛠️ Comandos

```bash
pnpm dev      # Servidor de desarrollo
pnpm build    # Compilación optimizada (0 errores TypeScript)
pnpm preview  # Vista previa de producción
```

## 📞 Contacto Integrado

- **Teléfono / WhatsApp**: 932 375 092 (+51 932 375 092)
- **Facebook**: DoKa
- **TikTok**: DoKa
- **Cobertura**: Toda Lima Metropolitana
