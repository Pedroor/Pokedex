import {POKEMON_TYPE_ICONS} from '../constants';

const getIcon = (type: string) => POKEMON_TYPE_ICONS[type.toLowerCase()];

export function getPokemonTypeIcons(type1: string, type2: string) {
  console.log('TYPE!', type1);
  console.log('TYPE!', type2);
  const icon1: string = getIcon(type1);

  const icon2: string = getIcon(type2);

  return {icon1, icon2};
}

export default getPokemonTypeIcons;
