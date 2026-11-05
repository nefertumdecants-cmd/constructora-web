import { useState } from 'preact/hooks';
import { t, type Lang } from '../i18n/ui';
import type { Proyecto } from './tipos';

export default function Galeria({ lang, p }: { lang: Lang; p: Proyecto }) {
  const tx = t[lang].proyectos;
  const n = p.imagenes.length || 3; // 3 marcadores si aún no hay fotos
  const [i, setI] = useState(0);
  const ir = (d: number) => setI((i + d + n) % n);
  const img = p.imagenes[i];
  return (
    <div role="group" aria-roledescription="carousel" aria-label={tx.galeria}
      onKeyDown={(e) => { if (e.key === 'ArrowLeft') ir(-1); if (e.key === 'ArrowRight') ir(1); }}>
      <div class="relative h-56 sm:h-72 rounded-lg overflow-hidden bg-gradient-to-br from-marca to-marca-oscuro grid place-items-center text-white/70 text-xs">
        {img ? <img src={img.src} alt={img.alt[lang]} loading="lazy" class="absolute inset-0 w-full h-full object-cover" /> : <span>{tx.ejemplo} · {i + 1}/{n}</span>}
        {n > 1 && (<>
          <button type="button" aria-label={tx.anterior} onClick={() => ir(-1)} class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 text-black rounded-full w-9 h-9">‹</button>
          <button type="button" aria-label={tx.siguiente} onClick={() => ir(1)} class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 text-black rounded-full w-9 h-9">›</button>
        </>)}
      </div>
      <p class="sr-only" aria-live="polite">{i + 1} / {n}</p>
    </div>
  );
}
