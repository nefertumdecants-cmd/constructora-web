import { useState } from 'preact/hooks';
import { lazy, Suspense } from 'preact/compat';
import { t, type Lang } from '../i18n/ui';
import type { Proyecto } from './tipos';
import DetalleProyecto from './DetalleProyecto';

const Mapa = lazy(() => import('./MapaProyectos'));

export default function Proyectos({ lang, proyectos }: { lang: Lang; proyectos: Proyecto[] }) {
  const tx = t[lang].proyectos;
  const [estado, setEstado] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [tipo, setTipo] = useState('');
  const [vista, setVista] = useState<'lista' | 'mapa'>('lista');
  const [abierto, setAbierto] = useState<Proyecto | null>(null);

  const ciudades = [...new Set(proyectos.map((p) => p.ubicacion.ciudad[lang]))].sort();
  const lista = proyectos.filter((p) =>
    (!estado || p.estado === estado) && (!ciudad || p.ubicacion.ciudad[lang] === ciudad) && (!tipo || p.tipo === tipo))
    .sort((a, b) => Number(b.destacado) - Number(a.destacado));
  const hayFiltro = estado || ciudad || tipo;

  const sel = (label: string, v: string, set: (s: string) => void, opts: [string, string][]) => (
    <label class="grid gap-1 text-xs text-gray-600">{label}
      <select value={v} onChange={(e) => set((e.target as HTMLSelectElement).value)} class="border rounded px-3 py-2 text-sm text-black bg-white">
        <option value="">{tx.todos}</option>
        {opts.map(([k, n]) => <option value={k}>{n}</option>)}
      </select>
    </label>
  );

  return (
    <div>
      <div class="flex flex-wrap items-end gap-3 mb-4" role="group" aria-label={tx.filtrar}>
        {sel(tx.estado, estado, setEstado, Object.entries(tx.estados))}
        {sel(tx.ciudad, ciudad, setCiudad, ciudades.map((c) => [c, c]))}
        {sel(tx.tipo, tipo, setTipo, Object.entries(tx.tipos))}
        {hayFiltro && <button type="button" class="text-sm underline text-marca py-2" onClick={() => { setEstado(''); setCiudad(''); setTipo(''); }}>{tx.limpiar}</button>}
        <div class="ml-auto flex border rounded overflow-hidden text-sm" role="group">
          {(['lista', 'mapa'] as const).map((v) => (
            <button type="button" aria-pressed={vista === v} onClick={() => setVista(v)} class={`px-4 py-2 ${vista === v ? 'bg-marca text-white' : 'bg-white'}`}>{tx[v]}</button>
          ))}
        </div>
      </div>
      <p class="text-sm text-gray-500 mb-4" aria-live="polite">{lista.length} {tx.resultados}</p>

      {lista.length === 0 && <p class="py-8 text-gray-600">{tx.vacio}</p>}

      {vista === 'mapa' && lista.length > 0 && (
        <Suspense fallback={<div class="h-[420px] rounded-xl bg-gray-100" />}>
          <Mapa lang={lang} proyectos={lista} onSelect={setAbierto} />
        </Suspense>
      )}

      {vista === 'lista' && (
        <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((p) => (
            <li key={p.id} class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div class="relative h-40 bg-gradient-to-br from-marca to-marca-oscuro grid place-items-center text-white/70 text-xs">
                {p.imagenes[0] ? <img src={p.imagenes[0].src} alt={p.imagenes[0].alt[lang]} loading="lazy" class="absolute inset-0 w-full h-full object-cover" /> : tx.ejemplo}
                {p.destacado && <span class="absolute top-2 left-2 bg-acento text-black text-xs font-semibold px-2 py-1 rounded">{tx.destacado}</span>}
              </div>
              <div class="p-4">
                <span class="text-xs font-semibold text-marca">{tx.estados[p.estado]} · {tx.tipos[p.tipo]}</span>
                <h3 class="text-lg font-bold">{p.nombre[lang]}</h3>
                <p class="text-sm text-gray-600">{p.ubicacion.ciudad[lang]}</p>
                <div class="mt-3" aria-label={`${tx.avance} ${p.avance}%`}>
                  <div class="h-2 bg-gray-200 rounded"><div class="h-2 bg-acento rounded" style={{ width: `${p.avance}%` }} /></div>
                  <span class="text-xs text-gray-500">{tx.avance}: {p.avance}%</span>
                </div>
                <button type="button" onClick={() => setAbierto(p)} class="mt-4 text-marca font-semibold underline">{tx.ver}</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {abierto && <DetalleProyecto lang={lang} p={abierto} onClose={() => setAbierto(null)} />}
    </div>
  );
}
