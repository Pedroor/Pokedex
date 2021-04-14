import React, {useEffect, useMemo} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {View, Text} from 'react-native';
import getColorByPokemonType from '../../utils/getPokemonColor';
import {usePokemonsQueryById} from '../../hooks/usePokemonsQuery';

type ParamList = {
  Details: {
    id: string;
  };
};

function Details() {
  const route = useRoute<RouteProp<ParamList, 'Details'>>();
  const pokemonId = route.params.id;
  const pokemon = usePokemonsQueryById(pokemonId);

  const backgroundColor = useMemo(
    () => getColorByPokemonType(pokemon.data?.types[0].type.name || ''),
    [pokemon.data?.types],
  );
  useEffect(() => {
    console.log(pokemon.data?.base_experience);
    console.log(backgroundColor);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{pokemonId}</Text>
    </View>
  );
}

export default Details;
