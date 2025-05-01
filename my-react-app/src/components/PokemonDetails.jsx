const PokemonDetails = ({ character }) => {
  return (
    <div className="pokemon-details">
      <h2>{character.name}</h2>
      <img src={character.sprites.front_default} alt={character.name} />
    </div>
  );
};

export default PokemonDetails;