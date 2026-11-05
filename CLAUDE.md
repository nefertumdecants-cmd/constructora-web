# Contexto del proyecto: Sitio web de constructora

## Resumen
Sitio web (landing page) para una constructora. El cliente quiere una sección interactiva que muestre todos los proyectos que tiene en curso (y, según defina, también terminados y futuros). El objetivo principal es generar contactos y mostrar trayectoria.

Idioma del sitio y de los textos: español (confirmar si se necesita inglés).
Idioma de trabajo y de los comentarios del código: español.

## Estado de la información
La información del cliente se está recopilando con un cuestionario de 13 secciones (datos de empresa, objetivos, marca, estructura, proyectos, funcionalidades, multimedia, contacto, aspectos técnicos, referencias, plazos y checklist). Hasta que el cliente responda:
- No inventar nombres, cifras, direcciones, precios ni textos de la empresa.
- Usar datos de ejemplo claramente marcados como ficticios (por ejemplo "Proyecto Ejemplo 1") y mantenerlos separados del código en un archivo de datos.
- Dejar logo, colores y tipografías como variables fáciles de cambiar.

## Alcance de la landing page
Secciones previstas (confirmar cuáles quiere el cliente):
1. Portada con título, imagen o video de fondo y botón de contacto
2. Quiénes somos
3. Servicios
4. **Proyectos (sección interactiva, prioridad principal)**
5. Cifras destacadas
6. Proceso de trabajo
7. Testimonios
8. Contacto y ubicación, con botón flotante de WhatsApp

## Sección de proyectos (prioridad)
Funcionalidades candidatas, a activar según lo que el cliente marque:
- Tarjetas de proyectos con foto y datos clave
- Filtros por estado, ciudad y tipo
- Mapa interactivo con pines por proyecto
- Ventana o página de detalle por proyecto con galería
- Barra o línea de tiempo de avance de obra
- Comparador "antes y después"
- Descarga de planos o ficha técnica
- Formulario de contacto que indica el proyecto consultado

### Modelo de datos de un proyecto
Los proyectos deben vivir en un archivo de datos (JSON o similar), nunca escritos a mano dentro del HTML, para que agregar un proyecto no requiera tocar el diseño.

```json
{
  "id": "proyecto-ejemplo-1",
  "nombre": "",
  "eslogan": "",
  "estado": "en_planos | en_construccion | en_venta | entregado",
  "avance": 0,
  "ubicacion": { "direccion": "", "ciudad": "", "lat": 0, "lng": 0 },
  "tipo": "edificio | urbanizacion | casa | comercial | obra_publica",
  "descripcion": "",
  "fechaInicio": "",
  "fechaEntrega": "",
  "areaTerreno": 0,
  "areaConstruccion": 0,
  "unidades": "",
  "tipologias": [],
  "precioDesde": null,
  "disponibilidad": "",
  "caracteristicas": [],
  "amenidades": [],
  "hitos": [{ "fecha": "", "titulo": "" }],
  "destacado": false,
  "imagenes": [],
  "videos": [],
  "planos": [],
  "contacto": { "whatsapp": "", "correo": "" }
}
```

## Criterios técnicos
- Sitio rápido y responsive, pensado primero para celular.
- Las imágenes deben optimizarse (formato WebP o AVIF, carga diferida, tamaños adaptables).
- Accesibilidad básica: textos alternativos, contraste suficiente, navegación con teclado en filtros, galería y ventanas.
- SEO básico: títulos y descripciones por página, etiquetas Open Graph, datos estructurados de organización y mapa del sitio.
- El formulario de contacto debe validar los campos y enviar al correo que indique el cliente.
- Textos legales (privacidad, cookies) según lo que confirme el cliente.

## Forma de trabajar
- Proponer primero la estructura de carpetas y el stack antes de escribir mucho código, y esperar confirmación.
- Cambios pequeños y revisables; explicar brevemente qué se cambió.
- Si falta un dato del cliente, preguntar o dejar un marcador `TODO(cliente)` en lugar de inventarlo.
- No instalar dependencias pesadas sin justificarlo.
- Antes de dar algo por terminado, probar en vista móvil y de escritorio.
