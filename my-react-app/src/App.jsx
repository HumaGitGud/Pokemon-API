import './App.css'
import { useState, useEffect } from 'react';
import PokemonCards from './components/PokemonCards';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState([0, 5]);

  useEffect(() => {
    fetchPokemon(page);
  }, [page]);

  const fetchPokemon = async (page) => {
    const offset = page[0];
    const limit = page[1] - page[0];
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const data = await res.json();
    setCharacters(data.results);
  }

  const onClickNext = () => {
    if (page[1] < 1000) {
      setPage((prev) => [prev[0]+5, prev[1]+5]);
    } else {
      setPage([0,5]);
    }
  };
  
  const onClickBack = () => {
    if (page[0] <= 0) {
      setPage([995, 1000]);
    } else {
      setPage((prev) => [prev[0]-5, prev[1]-5]);
    }
  };
  
  return (
    <div className="App">
      <h1>Pokemons</h1>
      <PokemonCards characters={characters} />
        <div>
          <button onClick={onClickBack}>Back</button>
          <button onClick={onClickNext}>Next</button>
        </div>
    </div>
  )
}

export default App