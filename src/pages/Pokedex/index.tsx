import React, {ReactNode, useEffect, useState} from 'react';

import {Text, View} from 'react-native';
import {Header} from '../../components/Header';

interface PokedexProps {
  children: ReactNode;
}

function Pokedex({children}: PokedexProps) {
  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    console.log(pokemonName);
  }, [pokemonName]);

  return (
    <View style={{flex: 1}}>
      <Header
        title="Pokédex"
        inputValue={pokemonName}
        setInputValue={setPokemonName}
        subtitle="A Pokédex contem os status detalhados de cada criatura do universo Pokémon."
      />
      <Text>OLA</Text>
    </View>
  );
}

export default Pokedex;
