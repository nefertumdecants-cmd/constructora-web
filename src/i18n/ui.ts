export const idiomas = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof idiomas;

export const t = {
  es: {
    nav: { nosotros: 'Quiénes somos', servicios: 'Servicios', proyectos: 'Proyectos', contacto: 'Contacto' },
    portada: { titulo: 'Construimos lo que imaginas', sub: 'Texto de portada de ejemplo. TODO(cliente)', cta: 'Contáctanos' },
    nosotros: { titulo: 'Quiénes somos', texto: 'Texto de ejemplo sobre la empresa. TODO(cliente): reemplazar con la historia real.' },
    servicios: { titulo: 'Servicios', items: ['Construcción de edificios', 'Casas y urbanizaciones', 'Obra comercial'] },
    proyectos: {
      titulo: 'Nuestros proyectos', todos: 'Todos', avance: 'Avance', ver: 'Ver detalle', cerrar: 'Cerrar',
      consultar: 'Consultar por WhatsApp', ejemplo: 'Dato de ejemplo (ficticio)', filtrar: 'Filtros',
      estado: 'Estado', ciudad: 'Ciudad', tipo: 'Tipo', lista: 'Lista', mapa: 'Mapa', vacio: 'No hay proyectos con estos filtros.',
      limpiar: 'Limpiar filtros', destacado: 'Destacado', ubicacion: 'Ubicación', inicio: 'Inicio', entrega: 'Entrega estimada',
      terreno: 'Área de terreno', construccion: 'Área de construcción', unidades: 'Unidades', caracteristicas: 'Características',
      amenidades: 'Amenidades', hitos: 'Línea de tiempo', galeria: 'Galería', anterior: 'Imagen anterior', siguiente: 'Imagen siguiente',
      resultados: 'proyectos',
      estados: { en_planos: 'En planos', en_construccion: 'En construcción', en_venta: 'En venta', entregado: 'Entregado' },
      tipos: { edificio: 'Edificio', urbanizacion: 'Urbanización', casa: 'Casa', comercial: 'Comercial', obra_publica: 'Obra pública' },
    },
    contacto: { titulo: 'Contacto', nombre: 'Nombre', correo: 'Correo', mensaje: 'Mensaje', enviar: 'Enviar por WhatsApp', proyecto: 'Proyecto consultado', nota: 'Al enviar se abrirá WhatsApp con tu mensaje ya escrito; solo pulsa enviar.' },
    wa: 'Escríbenos por WhatsApp',
  },
  en: {
    nav: { nosotros: 'About us', servicios: 'Services', proyectos: 'Projects', contacto: 'Contact' },
    portada: { titulo: 'We build what you imagine', sub: 'Sample hero text. TODO(client)', cta: 'Contact us' },
    nosotros: { titulo: 'About us', texto: 'Sample company text. TODO(client): replace with the real story.' },
    servicios: { titulo: 'Services', items: ['Building construction', 'Houses and developments', 'Commercial works'] },
    proyectos: {
      titulo: 'Our projects', todos: 'All', avance: 'Progress', ver: 'View details', cerrar: 'Close',
      consultar: 'Inquire on WhatsApp', ejemplo: 'Sample data (fictitious)', filtrar: 'Filters',
      estado: 'Status', ciudad: 'City', tipo: 'Type', lista: 'List', mapa: 'Map', vacio: 'No projects match these filters.',
      limpiar: 'Clear filters', destacado: 'Featured', ubicacion: 'Location', inicio: 'Start', entrega: 'Estimated delivery',
      terreno: 'Land area', construccion: 'Built area', unidades: 'Units', caracteristicas: 'Features',
      amenidades: 'Amenities', hitos: 'Timeline', galeria: 'Gallery', anterior: 'Previous image', siguiente: 'Next image',
      resultados: 'projects',
      estados: { en_planos: 'Planning', en_construccion: 'Under construction', en_venta: 'For sale', entregado: 'Delivered' },
      tipos: { edificio: 'Building', urbanizacion: 'Development', casa: 'House', comercial: 'Commercial', obra_publica: 'Public works' },
    },
    contacto: { titulo: 'Contact', nombre: 'Name', correo: 'Email', mensaje: 'Message', enviar: 'Send via WhatsApp', proyecto: 'Project of interest', nota: 'On submit, WhatsApp opens with your message ready; just press send.' },
    wa: 'Message us on WhatsApp',
  },
} as const;
