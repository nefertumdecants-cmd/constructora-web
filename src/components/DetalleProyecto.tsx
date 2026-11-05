import { useEffect, useRef } from 'preact/hooks';
import { t, type Lang } from '../i18n/ui';
import type { Proyecto } from './tipos';
import Galeria from './Galeria';

const mes = (lang: Lang, f: string) => new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${f}-01T00:00:00Z`));
const m2 = (lang: Lang, n: number) => `${new Intl.NumberFormat(lang).format(n)} m²`;

export default function DetalleProyecto({ lang, p, onClose }: { lang: Lang; p: Proyecto; onClose: () => void }) {
  const tx = t[lang].proyectos;
  const cerrar = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const previo = document.activeElement as HTMLElement | null;
    cerrar.current?.focus();
    document.body.style.overflow = 'hidden';
    const h = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', h);
    return () => { document.removeEventListener('keydown', h); document.body.style.overflow = ''; previo?.focus(); };
  }, []);
  const dato = (k: string, v: string) => <div><dt class="text-xs text-gray-500">{k}</dt><dd class="font-semibold">{v}</dd></div>;
  const base = lang === 'en' ? '/en' : '';
  return (
    <div class="fixed inset-0 bg-black/60 z-50 overflow-y-auto p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div role="dialog" aria-modal="true" aria-label={p.nombre[lang]} class="bg-white rounded-xl max-w-2xl mx-auto p-5 sm:p-6">
        <div class="flex justify-between gap-4">
          <div>
            <span class="text-xs font-semibold text-marca">{tx.estados[p.estado]} · {tx.tipos[p.tipo]}</span>
            <h3 class="text-2xl font-bold">{p.nombre[lang]}</h3>
            <p class="text-gray-600">{p.eslogan[lang]}</p>
          </div>
          <button ref={cerrar} type="button" onClick={onClose} aria-label={tx.cerrar} class="self-start border rounded px-3 py-1">✕</button>
        </div>
        <div class="mt-4"><Galeria lang={lang} p={p} /></div>
        <p class="mt-4 text-gray-700">{p.descripcion[lang]}</p>
        <div class="mt-4" aria-label={`${tx.avance} ${p.avance}%`}>
          <div class="h-2 bg-gray-200 rounded"><div class="h-2 bg-acento rounded" style={{ width: `${p.avance}%` }} /></div>
          <span class="text-xs text-gray-500">{tx.avance}: {p.avance}%</span>
        </div>
        <dl class="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
          {dato(tx.ubicacion, `${p.ubicacion.direccion}, ${p.ubicacion.ciudad[lang]}`)}
          {dato(tx.inicio, mes(lang, p.fechaInicio))}
          {dato(tx.entrega, mes(lang, p.fechaEntrega))}
          {dato(tx.terreno, m2(lang, p.areaTerreno))}
          {dato(tx.construccion, m2(lang, p.areaConstruccion))}
          {dato(tx.unidades, p.unidades)}
        </dl>
        <div class="mt-5 grid sm:grid-cols-2 gap-4 text-sm">
          <div><h4 class="font-bold mb-1">{tx.caracteristicas}</h4><ul class="list-disc pl-5">{p.caracteristicas[lang].map((c) => <li>{c}</li>)}</ul></div>
          <div><h4 class="font-bold mb-1">{tx.amenidades}</h4><ul class="list-disc pl-5">{p.amenidades[lang].map((c) => <li>{c}</li>)}</ul></div>
        </div>
        <h4 class="font-bold mt-5 mb-2">{tx.hitos}</h4>
        <ol class="border-l-2 border-marca/30 ml-2 space-y-3 text-sm">
          {p.hitos.map((h) => (
            <li class="pl-4 relative"><span class="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-acento" />
              <span class="text-gray-500">{mes(lang, h.fecha)}</span> — {h.titulo[lang]}</li>
          ))}
        </ol>
        <a href={`${base}/?proyecto=${p.id}#contacto`} onClick={onClose} class="inline-block mt-6 bg-marca text-white px-5 py-2 rounded font-semibold">{tx.consultar}</a>
      </div>
    </div>
  );
}
