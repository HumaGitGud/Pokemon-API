const PokemonDetails = ({ character }) => {
    return (
        <div className="pokemon-details">
            <h2>{character.forms[0].name}</h2>
            <img>{character.forms[0].url}</img>
        </div>
    );
};

export default PokemonDetails;