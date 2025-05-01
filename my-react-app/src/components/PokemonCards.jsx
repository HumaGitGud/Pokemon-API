import { useEffect, useState } from "react";
import PokemonDetails from "./PokemonDetails";

const PokemonCards = ({ character }) => {
    const [character, setCharacter] = useState();

    return (
        <div className="pokemon-cards">
            {character.map((c, index) => (
                
            ))}
            
            {character && <PokemonDetails character={character}/>}

        </div>
    )
}

export default PokemonCards;