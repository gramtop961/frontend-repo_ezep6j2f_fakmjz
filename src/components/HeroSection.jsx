import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_3px_0_#000]">
              PokéDex Pixel+ 3D
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto lg:mx-0">
              Browse Pokémon stats and evolutions in a playful pixel aesthetic. Click a Pokémon to open a 3D-styled modal with interactive motion.
            </p>
            <div className="mt-6 inline-flex items-center gap-3">
              <span className="px-3 py-1 rounded border border-slate-700 bg-slate-900/60 text-slate-300 text-xs tracking-widest uppercase" style={{ boxShadow: '0 0 0 3px #0f172a inset' }}>
                Pixel Mode
              </span>
              <span className="px-3 py-1 rounded border border-fuchsia-700 bg-fuchsia-900/30 text-fuchsia-200 text-xs tracking-widest uppercase" style={{ boxShadow: '0 0 0 3px #701a75 inset' }}>
                3D Interactions
              </span>
            </div>
          </div>

          <div className="relative h-[420px] w-full rounded-xl border border-slate-800 bg-slate-900/40" style={{ boxShadow: '0 0 0 6px #0b1220 inset' }}>
            <Spline scene="https://prod.spline.design/cVzHR3fQnWrlrLT7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
