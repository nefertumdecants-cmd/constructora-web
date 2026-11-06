// Datos de la empresa. TODO(cliente): reemplazar todo lo marcado.
export const sitio = {
  nombre: 'Constructora Ejemplo', // TODO(cliente)
  whatsapp: '593995050650', // número del cliente en formato internacional (Ecuador +593), sin + ni ceros iniciales
  correo: 'contacto@ejemplo.com', // TODO(cliente)
};

// Enlace de WhatsApp con el mensaje ya escrito (el prospecto solo pulsa "enviar").
export const waLink = (texto: string) => `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(texto)}`;

// Secciones que dependen de datos reales del cliente. Cambiar a true cuando existan.
// (Proyectos: agregar un JSON por proyecto en src/data/proyectos/ — hoy son ejemplos ficticios.)
export const secciones = { proyectos: false, cifras: false, testimonios: false };
