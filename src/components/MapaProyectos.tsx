import { useEffect, useRef } from 'preact/hooks';
import type { Lang } from '../i18n/ui';
import type { Proyecto } from './tipos';

// Leaflet se carga bajo demanda: solo pesa cuando el usuario abre la vista de mapa.
export default function MapaProyectos({ lang, proyectos, onSelect }: { lang: Lang; proyectos: Proyecto[]; onSelect: (p: Proyecto) => void }) {
  const el = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let mapa: import('leaflet').Map | undefined;
    let vivo = true;
    (async () => {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');
      if (!vivo || !el.current) return;
      mapa = L.map(el.current, { scrollWheelZoom: false });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18, attribution: '&copy; OpenStreetMap',
      }).addTo(mapa);
      const pts: [number, number][] = [];
      proyectos.forEach((p) => {
        const ll: [number, number] = [p.ubicacion.lat, p.ubicacion.lng];
        pts.push(ll);
        const icon = L.divIcon({ className: '', iconSize: [28, 28], iconAnchor: [14, 28],
          html: '<span style="display:block;width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:#1f4e79;border:3px solid #e0a526"></span>' });
        L.marker(ll, { icon, title: p.nombre[lang], keyboard: true }).addTo(mapa!)
          .bindTooltip(p.nombre[lang]).on('click', () => onSelect(p));
      });
      if (pts.length) mapa.fitBounds(pts, { padding: [40, 40], maxZoom: 13 }); else mapa.setView([0, 0], 2);
    })();
    return () => { vivo = false; mapa?.remove(); };
  }, [lang, proyectos]);
  return <div ref={el} class="h-[420px] rounded-xl border border-gray-200 z-0" role="region" aria-label="Mapa" />;
}
