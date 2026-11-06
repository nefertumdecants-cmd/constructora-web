// Contenido de ejemplo (FICTICIO). TODO(cliente): reemplazar con datos reales.
type L = { es: string; en: string };

export const aviso: L = {
  es: 'Boceto · todos los datos y textos son de ejemplo',
  en: 'Sketch · all data and texts are examples',
};

export const cifras: { valor: number; sufijo: string; etiqueta: L }[] = [
  { valor: 15, sufijo: '+', etiqueta: { es: 'Años de experiencia', en: 'Years of experience' } },
  { valor: 40, sufijo: '+', etiqueta: { es: 'Proyectos entregados', en: 'Projects delivered' } },
  { valor: 120000, sufijo: ' m²', etiqueta: { es: 'Construidos', en: 'Built' } },
  { valor: 800, sufijo: '+', etiqueta: { es: 'Familias felices', en: 'Happy families' } },
];

export const proceso: { titulo: L; texto: L }[] = [
  { titulo: { es: 'Consulta', en: 'Consultation' }, texto: { es: 'Escuchamos tu idea, terreno y presupuesto.', en: 'We listen to your idea, land and budget.' } },
  { titulo: { es: 'Diseño', en: 'Design' }, texto: { es: 'Planos y propuesta técnica a tu medida.', en: 'Tailored plans and technical proposal.' } },
  { titulo: { es: 'Presupuesto', en: 'Quote' }, texto: { es: 'Costos claros y cronograma acordado.', en: 'Clear costs and an agreed schedule.' } },
  { titulo: { es: 'Construcción', en: 'Construction' }, texto: { es: 'Obra supervisada, con avances visibles.', en: 'Supervised works with visible progress.' } },
  { titulo: { es: 'Entrega', en: 'Handover' }, texto: { es: 'Revisión final y acompañamiento posventa.', en: 'Final inspection and after-sales support.' } },
];

export const testimonios: { nombre: string; rol: L; texto: L }[] = [
  { nombre: 'Cliente Ejemplo 1', rol: { es: 'Propietario de casa', en: 'Homeowner' }, texto: { es: 'Testimonio de ejemplo. TODO(cliente): reemplazar con opinión real.', en: 'Sample testimonial. TODO(client): replace with a real review.' } },
  { nombre: 'Cliente Ejemplo 2', rol: { es: 'Comprador de departamento', en: 'Apartment buyer' }, texto: { es: 'Testimonio de ejemplo. TODO(cliente): reemplazar con opinión real.', en: 'Sample testimonial. TODO(client): replace with a real review.' } },
  { nombre: 'Cliente Ejemplo 3', rol: { es: 'Empresa', en: 'Company' }, texto: { es: 'Testimonio de ejemplo. TODO(cliente): reemplazar con opinión real.', en: 'Sample testimonial. TODO(client): replace with a real review.' } },
];

export const titulos = {
  cifras: { es: 'Nuestra trayectoria en cifras', en: 'Our track record in numbers' },
  proceso: { es: 'Cómo trabajamos', en: 'How we work' },
  testimonios: { es: 'Lo que dicen nuestros clientes', en: 'What our clients say' },
};

export const proximamente = {
  titulo: { es: 'Muy pronto: nuestros proyectos', en: 'Coming soon: our projects' },
  texto: {
    es: 'Estamos preparando la galería de obras en curso y entregadas. Mientras tanto, cuéntanos qué quieres construir.',
    en: 'We are preparing the gallery of ongoing and completed works. In the meantime, tell us what you want to build.',
  },
  boton: { es: 'Escríbenos por WhatsApp', en: 'Message us on WhatsApp' },
  mensaje: { es: 'Hola, quisiera información sobre sus proyectos y servicios.', en: 'Hello, I would like information about your projects and services.' },
};

// Servicios tomados de la maqueta del cliente (captura de su Google Sites).
// TODO(cliente): completar las viñetas que se cortaban en la captura y revisar la traducción al inglés.
export const servicios: { icono: 'edificio' | 'brocha' | 'compas'; titulo: L; texto: L; items: { es: string[]; en: string[] } }[] = [
  {
    icono: 'edificio',
    titulo: { es: 'Construcción Civil', en: 'Civil Construction' },
    texto: {
      es: 'Edificamos estructuras sólidas desde los cimientos. Especialistas en naves industriales, locales comerciales y proyectos de obra nueva con los más altos estándares de seguridad y calidad constructiva.',
      en: 'We build solid structures from the foundations up. Specialists in industrial warehouses, commercial premises and new-build projects with the highest safety and construction quality standards.',
    },
    items: {
      es: ['Estructuras metálicas y hormigón', 'Locales comerciales formato "Stand Alone"'],
      en: ['Steel and concrete structures', 'Stand-alone commercial premises'],
    },
  },
  {
    icono: 'brocha',
    titulo: { es: 'Remodelaciones', en: 'Remodeling' },
    texto: {
      es: 'Le damos nueva vida a tu local. Transformaciones arquitectónicas y estéticas que renuevan la experiencia de tus clientes y optimizan la funcionalidad de tu espacio comercial.',
      en: 'We give your premises a new life. Architectural and aesthetic transformations that renew your customers’ experience and optimize the functionality of your commercial space.',
    },
    items: {
      es: ['Diseño y adecuación de interiores', 'Renovación de fachadas e iluminación'],
      en: ['Interior design and fit-out', 'Facade and lighting renovation'],
    },
  },
  {
    icono: 'compas',
    titulo: { es: 'Consultoría Técnica', en: 'Technical Consulting' },
    texto: {
      es: 'Asesoramiento experto para asegurar el éxito de tu inversión. Te acompañamos desde la fase de pre-proyecto, garantizando viabilidad, eficiencia en costos y planificación estratégica.',
      en: 'Expert advice to ensure the success of your investment. We support you from the pre-project phase, guaranteeing feasibility, cost efficiency and strategic planning.',
    },
    items: {
      es: ['Estudios de viabilidad y presupuestos', 'Gestión de permisos y licencias', 'Supervisión e interventoría de obra'],
      en: ['Feasibility studies and budgets', 'Permits and licensing management', 'Site supervision and oversight'],
    },
  },
];

export const iconos = {
  edificio: 'M4 21V5l8-3 8 3v16M9 21v-5h6v5M8 9h2M14 9h2M8 13h2M14 13h2',
  brocha: 'M14 3l7 7-9 9-4 1 1-4 9-9zM3 21l3-3',
  compas: 'M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z',
} as const;

export const banda = {
  boton: { es: 'Solicita una asesoría gratuita hoy', en: 'Request a free consultation today' },
  mensaje: { es: 'Hola, quisiera solicitar una asesoría gratuita.', en: 'Hello, I would like to request a free consultation.' },
};

export const textosPie = {
  descripcion: {
    es: 'Especialistas en transformar espacios comerciales e industriales a través de la construcción, remodelación y consultoría técnica de vanguardia.',
    en: 'Specialists in transforming commercial and industrial spaces through cutting-edge construction, remodeling and technical consulting.',
  },
  enlaces: { es: 'Enlaces', en: 'Links' },
  contacto: { es: 'Contacto', en: 'Contact' },
  inicio: { es: 'Inicio', en: 'Home' },
  nosotros: { es: 'Sobre Nosotros', en: 'About Us' },
  servicios: { es: 'Servicios', en: 'Services' },
  proyectos: { es: 'Proyectos', en: 'Projects' },
  proximamente: { es: '(Próximamente)', en: '(Coming soon)' },
  derechos: { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
  terminos: { es: 'Términos legales', en: 'Legal terms' },
  privacidad: { es: 'Política de Privacidad', en: 'Privacy Policy' },
};
