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
      consultar: 'Consultar por este proyecto', ejemplo: 'Dato de ejemplo (ficticio)', filtrar: 'Filtrar por estado',
      estados: { en_planos: 'En planos', en_construccion: 'En construcción', en_venta: 'En venta', entregado: 'Entregado' },
    },
    contacto: { titulo: 'Contacto', nombre: 'Nombre', correo: 'Correo', mensaje: 'Mensaje', enviar: 'Enviar', proyecto: 'Proyecto consultado', nota: 'Boceto: el envío aún no está conectado.' },
    wa: 'Escríbenos por WhatsApp',
  },
  en: {
    nav: { nosotros: 'About us', servicios: 'Services', proyectos: 'Projects', contacto: 'Contact' },
    portada: { titulo: 'We build what you imagine', sub: 'Sample hero text. TODO(client)', cta: 'Contact us' },
    nosotros: { titulo: 'About us', texto: 'Sample company text. TODO(client): replace with the real story.' },
    servicios: { titulo: 'Services', items: ['Building construction', 'Houses and developments', 'Commercial works'] },
    proyectos: {
      titulo: 'Our projects', todos: 'All', avance: 'Progress', ver: 'View details', cerrar: 'Close',
      consultar: 'Inquire about this project', ejemplo: 'Sample data (fictitious)', filtrar: 'Filter by status',
      estados: { en_planos: 'Planning', en_construccion: 'Under construction', en_venta: 'For sale', entregado: 'Delivered' },
    },
    contacto: { titulo: 'Contact', nombre: 'Name', correo: 'Email', mensaje: 'Message', enviar: 'Send', proyecto: 'Project of interest', nota: 'Sketch: form submission is not connected yet.' },
    wa: 'Message us on WhatsApp',
  },
} as const;
