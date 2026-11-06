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
