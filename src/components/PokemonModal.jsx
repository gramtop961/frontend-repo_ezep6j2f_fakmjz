import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function PokemonModal({ open, onClose, pokemon }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/70" onClick={onClose} />

          <motion.div
            initial={{ scale: 0.9, rotateX: -10, opacity: 0 }}
            animate={{ scale: 1, rotateX: 0, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="relative w-full max-w-2xl rounded-xl border border-fuchsia-700 bg-slate-950/90 backdrop-blur-xl p-6 text-slate-100"
            style={{ boxShadow: '0 0 0 8px #25123a inset, 0 20px 60px rgba(0,0,0,0.6)' }}
          >
            <button onClick={onClose} className="absolute right-3 top-3 p-2 rounded border border-slate-700 hover:bg-slate-800/60">
              <X size={18} />
            </button>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div className="relative rounded-lg border border-slate-800 bg-slate-900/60 p-4 flex items-center justify-center" style={{ boxShadow: 'inset 0 0 0 6px #0b1220' }} whileHover={{ rotateY: 6, rotateX: -6 }}>
                <img src={pokemon.spriteHD || pokemon.sprite} alt={pokemon.name} className="w-56 h-56 object-contain" style={{ imageRendering: 'pixelated' }} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-transparent to-transparent" />
              </motion.div>

              <div>
                <h3 className="text-2xl font-extrabold text-white drop-shadow-[0_2px_0_#000]">{pokemon.name}</h3>
                <p className="text-slate-400 text-sm">National No. #{String(pokemon.id).padStart(3, '0')}</p>

                <div className="mt-3 flex gap-2 flex-wrap">
                  {pokemon.types.map((t) => (
                    <span key={t} className="px-2 py-1 rounded text-xs border border-slate-800 bg-slate-950/70 text-slate-300" style={{ boxShadow: '0 0 0 2px #020617 inset' }}>{t}</span>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-slate-400">Height</div>
                    <div className="font-semibold">{pokemon.height} m</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Weight</div>
                    <div className="font-semibold">{pokemon.weight} kg</div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-xs text-slate-400 mb-1">Base Stats</div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded bg-slate-900/70 p-2 border border-slate-800" style={{ boxShadow: 'inset 0 0 0 3px #020617' }}>
                      <div className="text-xs text-slate-400">HP</div>
                      <div className="text-lg font-bold text-emerald-400">{pokemon.stats.hp}</div>
                    </div>
                    <div className="rounded bg-slate-900/70 p-2 border border-slate-800" style={{ boxShadow: 'inset 0 0 0 3px #020617' }}>
                      <div className="text-xs text-slate-400">ATK</div>
                      <div className="text-lg font-bold text-amber-400">{pokemon.stats.attack}</div>
                    </div>
                    <div className="rounded bg-slate-900/70 p-2 border border-slate-800" style={{ boxShadow: 'inset 0 0 0 3px #020617' }}>
                      <div className="text-xs text-slate-400">SPD</div>
                      <div className="text-lg font-bold text-sky-400">{pokemon.stats.speed}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-xs text-slate-400 mb-1">Evolution</div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {pokemon.evolution.map((evo, idx) => (
                      <React.Fragment key={evo.name}>
                        <div className="flex items-center gap-2 px-2 py-1 rounded border border-slate-800 bg-slate-900/60" style={{ boxShadow: 'inset 0 0 0 3px #0b1220' }}>
                          <img src={evo.sprite} alt={evo.name} className="w-6 h-6" style={{ imageRendering: 'pixelated' }} />
                          <span className="text-xs text-slate-200">{evo.name}</span>
                        </div>
                        {idx < pokemon.evolution.length - 1 && <span className="text-slate-400 text-xs">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
