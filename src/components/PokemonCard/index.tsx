import React from 'react';

import {Image, Text, View} from 'react-native';
import {usePokemonsQueryById} from '../../hooks/usePokemonsQuery';
import {Container, CardContainer, Title, PokedexNumber} from './styles';
import Pokeball from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../styles/theme';

type PokemonCardProps = {
  name: string;
  pokemonId: string;
  image: string;
};

export function PokemonCard({name, pokemonId, image}: PokemonCardProps) {
  const pokemonQueryById = usePokemonsQueryById(pokemonId);

  return (
    <Container>
      <CardContainer color={theme.colors.lightGrey}>
        <Image
          style={{width: 65, height: 65, marginTop: 8}}
          source={{uri: image}}
        />
        <Title>{name}</Title>
        <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <Pokeball
            name="pokeball"
            size={28}
            color="#ece8e8"
            style={{paddingRight: 16}}
          />
          <PokedexNumber>#{pokemonId}</PokedexNumber>
        </View>
      </CardContainer>
    </Container>
  );
}
