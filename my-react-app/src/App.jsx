import './App.css';
import { useState, useEffect } from 'react';
import PokemonCards from './components/PokemonCards';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState([0, 20]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  useEffect(() => {
    if (!search) {
      const offset = page[0];
      const limit = page[1];
      setCharacters(allCharacters.slice(offset, limit));
    }
  }, [page, allCharacters, search]);

  const fetchAllPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000`);
    const data = await res.json();
    setAllCharacters(data.results);
    setCharacters(data.results.slice(0, 20));
  };

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

  const handleSearch = (e) => {
    const entry = e.target.value.toLowerCase();
    setSearch(entry);
    if (entry === '') {
      setCharacters(allCharacters.slice(page[0], page[1]));
    } else {
      const filtered = allCharacters.filter(p => p.name.includes(entry));
      setCharacters(filtered);
    }
  };

  return (
    <div className="App">
      <h1>Pokem<CatchingPokemonIcon sx={{ fontSize: 50 }}/>ns </h1>
      <input type="text" placeholder="Search Pokémon" value={search} onChange={handleSearch} />
      {characters.length === 0 && <p>No Pokemon found</p>}
      <PokemonCards characters={characters} />
      <div>
        <button onClick={onClickBack}>Back</button>
        <button onClick={onClickNext}>Next</button>
      </div>
    </div>
  );
}

export default App;