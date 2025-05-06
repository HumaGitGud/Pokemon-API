import './App.css'
import { useState, useEffect } from 'react';
import PokemonCards from './components/PokemonCards';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState([0, 20]);

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
    if (page[0] + 20 < 1000) {
      setPage(prev => [prev[0] + 20, prev[1] + 20]);
    } else {
      setPage([0, 20]);
    }
  };
  
  const onClickBack = () => {
    if (page[0] - 20 >= 0) {
      setPage(prev => [prev[0] - 20, prev[1] - 20]);
    } else {
      setPage([0, 20]);
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