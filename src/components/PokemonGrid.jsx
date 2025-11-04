import React from 'react';
import { motion } from 'framer-motion';

function StatBar({ label, value, color }) {
  const width = Math.min(100, Math.round((value / 150) * 100));
  return (
    <div className="text-xs text-slate-300">
      <div className="flex justify-between"><span className="uppercase tracking-wider text-slate-400">{label}</span><span>{value}</span></div>
      <div className="h-2 mt-1 w-full bg-slate-800/80 rounded" style={{ boxShadow: 'inset 0 0 0 2px #0b1220' }}>
        <div className={`h-2 rounded ${color}`} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export default function PokemonGrid({ pokedex, onSelect }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pokedex.map((p) => (
          <motion.button
            key={p.id}
            onClick={() => onSelect(p)}
            whileHover={{ y: -6, rotateZ: -0.5 }}
            whileTap={{ scale: 0.98 }}
            className="group text-left rounded-xl border border-slate-800 bg-slate-900/70 p-4 hover:border-fuchsia-700 transition"
            style={{ boxShadow: '0 0 0 6px #0b1220 inset' }}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-20 h-20 rounded-lg bg-slate-950/70 border border-slate-800 overflow-hidden flex items-center justify-center" style={{ boxShadow: 'inset 0 0 0 3px #020617' }}>
                <img src={p.sprite} alt={p.name} className="w-16 h-16" style={{ imageRendering: 'pixelated' }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold tracking-wide drop-shadow-[0_2px_0_#000]">{p.name}</h3>
                  <span className="text-slate-400 text-xs">#{String(p.id).padStart(3, '0')}</span>
                </div>
                <div className="mt-1 flex gap-2">
                  {p.types.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs border border-slate-800 bg-slate-950/70 text-slate-300" style={{ boxShadow: '0 0 0 2px #020617 inset' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <StatBar label="HP" value={p.stats.hp} color="bg-emerald-500" />
              <StatBar label="ATK" value={p.stats.attack} color="bg-amber-400" />
              <StatBar label="SPD" value={p.stats.speed} color="bg-sky-400" />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
