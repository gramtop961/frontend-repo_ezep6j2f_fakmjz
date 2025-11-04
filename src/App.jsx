import React, { useMemo, useState } from 'react';
import HeroSection from './components/HeroSection.jsx';
import PokemonControls from './components/PokemonControls.jsx';
import PokemonGrid from './components/PokemonGrid.jsx';
import PokemonModal from './components/PokemonModal.jsx';

// Minimal curated Pokédex data to avoid external calls and keep things snappy
const POKEDEX = [
  {
    id: 1,
    name: 'Bulbasaur',
    types: ['grass', 'poison'],
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    spriteHD: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    height: 0.7,
    weight: 6.9,
    stats: { hp: 45, attack: 49, speed: 45 },
    evolution: [
      { name: 'Bulbasaur', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
      { name: 'Ivysaur', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
      { name: 'Venusaur', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    ],
  },
  {
    id: 4,
    name: 'Charmander',
    types: ['fire'],
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    spriteHD: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    height: 0.6,
    weight: 8.5,
    stats: { hp: 39, attack: 52, speed: 65 },
    evolution: [
      { name: 'Charmander', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
      { name: 'Charmeleon', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
      { name: 'Charizard', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    ],
  },
  {
    id: 7,
    name: 'Squirtle',
    types: ['water'],
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    spriteHD: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    height: 0.5,
    weight: 9.0,
    stats: { hp: 44, attack: 48, speed: 43 },
    evolution: [
      { name: 'Squirtle', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
      { name: 'Wartortle', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
      { name: 'Blastoise', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    ],
  },
  {
    id: 25,
    name: 'Pikachu',
    types: ['electric'],
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    spriteHD: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    height: 0.4,
    weight: 6.0,
    stats: { hp: 35, attack: 55, speed: 90 },
    evolution: [
      { name: 'Pichu', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png' },
      { name: 'Pikachu', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
      { name: 'Raichu', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png' },
    ],
  },
  {
    id: 133,
    name: 'Eevee',
    types: ['normal'],
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    spriteHD: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
    height: 0.3,
    weight: 6.5,
    stats: { hp: 55, attack: 55, speed: 55 },
    evolution: [
      { name: 'Eevee', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png' },
      { name: 'Vaporeon', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png' },
      { name: 'Jolteon', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png' },
      { name: 'Flareon', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png' },
    ],
  },
];

export default function App() {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return POKEDEX.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.trim().toLowerCase());
      const matchesType = typeFilter === 'all' || p.types.includes(typeFilter);
      return matchesQuery && matchesType;
    });
  }, [query, typeFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black text-slate-100">
      <HeroSection />
      <PokemonControls query={query} setQuery={setQuery} typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
      <PokemonGrid pokedex={filtered} onSelect={setSelected} />
      <PokemonModal open={!!selected} onClose={() => setSelected(null)} pokemon={selected || POKEDEX[0]} />

      <footer className="border-t border-slate-800/60 py-8 text-center text-slate-400">
        Built with a pixel aesthetic and interactive 3D touches. Not affiliated with Nintendo or The Pokémon Company.
      </footer>
    </div>
  );
}
