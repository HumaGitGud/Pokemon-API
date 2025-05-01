import PokemonDetails from "./PokemonDetails";
import { useState } from "react";

const PokemonCards = ({ characters }) => {

    const [character, setCharacter] = useState();

    const onCharacterClick = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setCharacter(data);
    }

    return (
        <div className="pokemon-cards">
            {characters.map((c, index) => (
                <div key={index} className="card" onClick={() => onCharacterClick(c.url)}>
                    {c.name}
                </div>
            ))}
            {character && <PokemonDetails character={character} />} 
        </div>
    );
};

export default PokemonCards;