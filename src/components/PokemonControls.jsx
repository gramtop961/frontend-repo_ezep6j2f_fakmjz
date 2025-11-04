import React from 'react';
import { Search } from 'lucide-react';

export default function PokemonControls({ query, setQuery, typeFilter, setTypeFilter }) {
  const types = ['all', 'grass', 'fire', 'water', 'electric', 'normal'];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
      <div className="rounded-xl border border-slate-800 bg-slate-900/70 backdrop-blur-md p-4 sm:p-6" style={{ boxShadow: '0 0 0 6px #0b1220 inset' }}>
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Pokémon by name..."
              className="w-full pl-10 pr-3 py-3 rounded-lg bg-slate-950/70 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              style={{ boxShadow: 'inset 0 0 0 3px #020617' }}
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-3 py-2 text-sm rounded border transition ${
                  typeFilter === t
                    ? 'bg-fuchsia-800/40 border-fuchsia-600 text-fuchsia-200'
                    : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-900'
                }`}
                style={{ boxShadow: typeFilter === t ? '0 0 0 3px #4c1d95 inset' : '0 0 0 3px #020617 inset' }}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
