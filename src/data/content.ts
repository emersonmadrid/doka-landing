import { Service, Project, Guarantee } from '../types';

export const COMPANY = {
  name: 'DoKa',
  tagline: 'Diseño y Transformación',
  headline: 'Diseños que transforman tu espacio',
  description: 'Soluciones integrales para hogares, oficinas y proyectos comerciales con calidad, seguridad y estilo.',
  phone: '932 375 092',
  phoneClean: '51932375092',
  whatsappUrl: 'https://wa.me/51932375092?text=%C2%A1Hola%20DoKa!%20Deseo%20solicitar%20asesor%C3%ADa%20y%20cotizaci%C3%B3n%20para%20un%20proyecto%20de%20remodelaci%C3%B3n.',
  location: 'Atención en toda Lima Metropolitana',
  facebook: 'https://facebook.com/DoKa',
  tiktok: 'https://tiktok.com/@DoKa',
};

export const SERVICES: Service[] = [
  {
    id: 'melamina',
    number: '01',
    title: 'Diseño y armado en melamina',
    description: 'Muebles a medida para cocinas integrales, closets, centros de entretenimiento y oficinas.',
    features: [
      'Cocinas con islas y barras desayunadoras',
      'Closets y walk-in closets a medida',
      'Muebles de TV con iluminación LED oculta',
      'Melamina RH resistente a la humedad de Lima'
    ],
    image: '/images/service-melamina.jpg'
  },
  {
    id: 'drywall',
    number: '02',
    title: 'Construcción en Drywall',
    description: 'Divisiones, cielos rasos y soluciones arquitectónicas con acabados modernos y limpios.',
    features: [
      'Falsos techos con cajillo para luz indirecta',
      'Tabiquería acústica para división de ambientes',
      'Hornacinas y repisas decorativas flotantes',
      'Placas verdes resistentes a la humedad'
    ],
    image: '/images/service-drywall.jpg'
  },
  {
    id: 'electricidad',
    number: '03',
    title: 'Servicios eléctricos',
    description: 'Instalaciones seguras y eficientes para hogares, oficinas y proyectos comerciales.',
    features: [
      'Instalación y modernización de tableros térmicos',
      'Perfiles de tira LED empotrados en muebles y techos',
      'Cableado general y balanceo de circuitos normado',
      'Puntos de red y tomacorrientes polarizados'
    ],
    image: '/images/service-electricidad.jpg'
  },
  {
    id: 'pintura',
    number: '04',
    title: 'Acabados en pintura',
    description: 'Pintura interior y exterior con empastado profesional que realza y protege tus paredes.',
    features: [
      'Empastado fino y lijado para acabado liso tipo espejo',
      'Pintura látex lavable, satinada y mate de marcas líderes',
      'Tratamiento de salitre y humedad costera',
      'Muros de acento y técnicas decorativas'
    ],
    image: '/images/service-pintura.jpg'
  }
];

export const GUARANTEES: Guarantee[] = [
  {
    number: '01',
    title: 'Calidad garantizada',
    description: 'Trabajamos con tableros de primera (Pelíkano, Vesto), herrajes de cierre suave y garantía por escrito de 12 meses.'
  },
  {
    number: '02',
    title: 'Cumplimos tiempos',
    description: 'Fijamos fechas de inicio y entrega por contrato. Respetamos tu tiempo y el de tu familia sin retrasos.'
  },
  {
    number: '03',
    title: 'Profesionales capacitados',
    description: 'Maestros técnicos con experiencia comprobada en carpintería fina, estructuras de drywall y electricidad certificada.'
  },
  {
    number: '04',
    title: 'Comprometidos contigo',
    description: 'Acompañamiento personalizado desde el diseño 3D preliminar hasta la limpieza final y entrega llave en mano.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Cocina Integral con Isla & Luz LED Cálida',
    category: 'Melamina a Medida',
    location: 'Surco, Lima',
    image: '/images/project-cocina-surco.jpg'
  },
  {
    id: '2',
    title: 'Cielo Raso Suspendido con Luz Indirecta',
    category: 'Construcción en Drywall',
    location: 'San Borja, Lima',
    image: '/images/project-drywall-sanborja.jpg'
  },
  {
    id: '3',
    title: 'Walk-in Closet a Medida con Gavetero Central',
    category: 'Melamina a Medida',
    location: 'Miraflores, Lima',
    image: '/images/project-closet-miraflores.jpg'
  },
  {
    id: '4',
    title: 'Centro de Entretenimiento con Panel Alistonado',
    category: 'Melamina & LED',
    location: 'San Isidro, Lima',
    image: '/images/project-tv-sanisidro.jpg'
  }
];
