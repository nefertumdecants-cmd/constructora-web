// Datos de la empresa. TODO(cliente): reemplazar todo lo marcado.
export const sitio = {
  nombre: 'KREANZA', // Nombre comercial (de la maqueta del cliente)
  subtitulo: { es: 'Constructora & Remodelaciones', en: 'Construction & Remodeling' },
  whatsapp: '593995050650', // número del cliente en formato internacional (Ecuador +593), sin + ni ceros iniciales
  correo: 'proyectos@kreanza.com', // De la maqueta del cliente. TODO(cliente): confirmar
};

// Enlace de WhatsApp con el mensaje ya escrito (el prospecto solo pulsa "enviar").
export const waLink = (texto: string) => `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(texto)}`;

// Secciones que dependen de datos reales del cliente. Cambiar a true cuando existan.
// (Proyectos: agregar un JSON por proyecto en src/data/proyectos/ — hoy son ejemplos ficticios.)
export const secciones = { proyectos: false, cifras: false, testimonios: false };

// Datos del pie de página (tomados de la maqueta del cliente).
// TODO(cliente): la dirección parece de relleno; confirmar dirección real y URLs de redes sociales.
export const pie = {
  direccion: 'Av. Principal Comercial 123, Edificio Vanguardia, Oficina 405.',
  telefono: '+593 99 505 0650', // el mismo número de WhatsApp
  redes: { facebook: '', instagram: '', linkedin: '' } as Record<'facebook' | 'instagram' | 'linkedin', string>,
};
