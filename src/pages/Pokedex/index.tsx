import React, {useEffect, useState} from 'react';

import {Text, View, FlatList, ListRenderItem} from 'react-native';
import {usePokemonsQuery} from '../../hooks/usePokemonsQuery';
import {Header} from '../../components/Header';
import {PokemonCard} from '../../components/PokemonCard';
import {PokemonResponse} from '../../types/pokemon';

function Pokedex() {
  const [pokemonName, setPokemonName] = useState('');
  const pokemonQuery = usePokemonsQuery('');

  useEffect(() => {}, []);

  const renderPokemonCards: ListRenderItem<PokemonResponse> = ({item}) => {
    const {name, url} = item;
    const pokemonId = url
      .replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace('/', '');
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;

    return <PokemonCard image={imageUrl} pokemonId={pokemonId} name={name} />;
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title="Pokédex"
        inputValue={pokemonName}
        setInputValue={setPokemonName}
        subtitle="A Pokédex contem os status detalhados de cada criatura do universo Pokémon."
      />

      <FlatList
        data={pokemonQuery.data?.results}
        renderItem={renderPokemonCards}
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 5}}
      />
    </View>
  );
}

export default Pokedex;
