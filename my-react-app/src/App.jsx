import './App.css'
import { useState, useEffect } from 'react';
import PokemonCards from './components/PokemonCards';
import PokemonDetails from './components/PokemonDetails';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="App">
      <PokemonCards />
    </div>
  )
}

export default App