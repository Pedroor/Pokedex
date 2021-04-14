export function replacePokemonURL(url: string) {
  const pokemonId = url
    .replace('https://pokeapi.co/api/v2/pokemon/', '')
    .replace('/', '');
  const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;

  return {pokemonId, imageUrl};
}
