const PokemonDetails = ({ character }) => {

  const playCry = () => {
    const cry = new Audio(character.cries.latest); // get sound url
    cry.play(); // play sound
  }

  return (
    <div className="pokemon-details">
      <h2>{character.name}</h2>
      <img src={character.sprites.front_default} alt={character.name} />
      <p>Height: {character.height}</p>
      <p>Weight: {character.weight}</p>
      <p>Type: {character.types.map(t => t.type.name).join(", ")}</p>

      <button onClick={playCry}>Play Cry</button>
    </div>
  );
};

export default PokemonDetails;