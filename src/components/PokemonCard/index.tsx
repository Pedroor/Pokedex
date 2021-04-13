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

  function selectContainerColor(color: string) {
    var containerColor = '';
    switch (color) {
      case 'fire':
        containerColor = theme.pokemonColors.fire;
        break;
      case 'water':
        containerColor = theme.pokemonColors.water;
        break;
      case 'normal':
        containerColor = theme.pokemonColors.normal;
        break;
      case 'electric':
        containerColor = theme.pokemonColors.electric;
        break;
      case 'grass':
        containerColor = theme.pokemonColors.grass;
        break;
      case 'ice':
        containerColor = theme.pokemonColors.ice;
        break;
      case 'fighting':
        containerColor = theme.pokemonColors.fighting;
        break;
      case 'poison':
        containerColor = theme.pokemonColors.poison;
        break;
      case 'ground':
        containerColor = theme.pokemonColors.ground;
        break;
      case 'flying':
        containerColor = theme.pokemonColors.flying;
        break;
      case 'psychic':
        containerColor = theme.pokemonColors.psychic;
        break;
      case 'bug':
        containerColor = theme.pokemonColors.bug;
        break;
      case 'rock':
        containerColor = theme.pokemonColors.rock;
        break;
      case 'ghost':
        containerColor = theme.pokemonColors.ghost;
        break;
      case 'dragon':
        containerColor = theme.pokemonColors.dragon;
        break;
      case 'fairy':
        containerColor = theme.pokemonColors.fairy;
        break;

      default:
        containerColor = theme.pokemonColors.normal;
        break;
    }
    return containerColor;
  }

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
