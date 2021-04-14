import {POKEMONS_COLORS} from '../constants';

const getColorByPokemonType = (type: string) =>
  POKEMONS_COLORS[type.toLowerCase()];

export default getColorByPokemonType;
