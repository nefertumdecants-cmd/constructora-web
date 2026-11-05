import type { Lang } from '../i18n/ui';
export type L = Record<Lang, string>;
export interface Proyecto {
  id: string;
  nombre: L;
  eslogan: L;
  estado: 'en_planos' | 'en_construccion' | 'en_venta' | 'entregado';
  avance: number;
  ubicacion: { direccion: string; ciudad: L; lat: number; lng: number };
  tipo: 'edificio' | 'urbanizacion' | 'casa' | 'comercial' | 'obra_publica';
  descripcion: L;
  fechaInicio: string;
  fechaEntrega: string;
  areaTerreno: number;
  areaConstruccion: number;
  unidades: string;
  caracteristicas: Record<Lang, string[]>;
  amenidades: Record<Lang, string[]>;
  hitos: { fecha: string; titulo: L }[];
  destacado: boolean;
  imagenes: { src: string; alt: L }[]; // vacío = se muestran marcadores de posición
  planos: { nombre: L; url: string }[];
  contacto: { whatsapp: string; correo: string };
}
