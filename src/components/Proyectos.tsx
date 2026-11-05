import { useState, useEffect } from 'preact/hooks';
import { t, type Lang } from '../i18n/ui';

export interface Proyecto {
  id: string;
  nombre: Record<Lang, string>;
  descripcion: Record<Lang, string>;
  estado: 'en_planos' | 'en_construccion' | 'en_venta' | 'entregado';
  avance: number;
  ubicacion: { ciudad: string };
}

export default function Proyectos({ lang, proyectos }: { lang: Lang; proyectos: Proyecto[] }) {
  const tx = t[lang].proyectos;
  const [filtro, setFiltro] = useState<string>('todos');
  const [abierto, setAbierto] = useState<Proyecto | null>(null);
  useEffect(() => {
    if (!abierto) return;
    const h = (e: KeyboardEvent) => e.key === 'Escape' && setAbierto(null);
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [abierto]);
  const lista = filtro === 'todos' ? proyectos : proyectos.filter((p) => p.estado === filtro);
  const filtros = ['todos', ...Object.keys(tx.estados)];

  return (
    <div>
      <div role="group" aria-label={tx.filtrar} class="flex flex-wrap gap-2 mb-6">
        {filtros.map((f) => (
          <button type="button" aria-pressed={filtro === f} onClick={() => setFiltro(f)}
            class={`px-4 py-2 rounded-full text-sm border focus-visible:outline-2 focus-visible:outline-offset-2 ${filtro === f ? 'bg-marca text-white border-marca' : 'bg-white border-gray-300'}`}>
            {f === 'todos' ? tx.todos : tx.estados[f as keyof typeof tx.estados]}
          </button>
        ))}
      </div>

      <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((p) => (
          <li key={p.id} class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <div class="h-40 bg-gradient-to-br from-marca to-marca-oscuro grid place-items-center text-white/70 text-xs" role="img" aria-label={p.nombre[lang]}>
              {tx.ejemplo}
            </div>
            <div class="p-4">
              <span class="text-xs font-semibold text-marca">{tx.estados[p.estado]}</span>
              <h3 class="text-lg font-bold">{p.nombre[lang]}</h3>
              <p class="text-sm text-gray-600">{p.ubicacion.ciudad}</p>
              <div class="mt-3" aria-label={`${tx.avance} ${p.avance}%`}>
                <div class="h-2 bg-gray-200 rounded"><div class="h-2 bg-acento rounded" style={{ width: `${p.avance}%` }} /></div>
                <span class="text-xs text-gray-500">{tx.avance}: {p.avance}%</span>
              </div>
              <button type="button" onClick={() => setAbierto(p)} class="mt-4 text-marca font-semibold underline">{tx.ver}</button>
            </div>
          </li>
        ))}
      </ul>

      {abierto && (
        <div class="fixed inset-0 bg-black/60 grid place-items-center p-4 z-50" role="dialog" aria-modal="true" aria-label={abierto.nombre[lang]}
          onClick={(e) => e.target === e.currentTarget && setAbierto(null)}>
          <div class="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 class="text-xl font-bold">{abierto.nombre[lang]}</h3>
            <p class="mt-2 text-gray-700">{abierto.descripcion[lang]}</p>
            <div class="mt-6 flex gap-3">
              <a href={`${lang === 'en' ? '/en' : ''}/?proyecto=${abierto.id}#contacto`} onClick={() => setAbierto(null)} class="bg-marca text-white px-4 py-2 rounded">{tx.consultar}</a>
              <button type="button" autofocus onClick={() => setAbierto(null)} class="px-4 py-2 border rounded">{tx.cerrar}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
