import React, {useEffect} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {usePokemonsQueryById} from '../../hooks/usePokemonsQuery';
import {Pokemon} from '../../types';

type ParamList = {
  Details: {
    id: string;
  };
};

function Details() {
  const route = useRoute<RouteProp<ParamList, 'Details'>>();
  const pokemonId = route.params.id;

  const pokemon = usePokemonsQueryById(pokemonId);

  useEffect(() => {
    console.log(pokemon.data?.name);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{pokemonId}</Text>
    </View>
  );
}

export default Details;
