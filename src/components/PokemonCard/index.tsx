import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, View, TouchableOpacity} from 'react-native';
import {usePokemonsQueryById} from '../../hooks/usePokemonsQuery';
import {Container, CardContainer, Title, PokedexNumber} from './styles';
import {useFavoriteList} from '../../hooks/useFavoriteList';
import Pokeball from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../styles/theme';

type PokemonCardProps = {
  name: string;
  pokemonId: string;
  image: string;
};

export function PokemonCard({name, pokemonId, image}: PokemonCardProps) {
  const navigation = useNavigation();
  const pokemonQueryById = usePokemonsQueryById(pokemonId);
  const {isPokemonOnTheList} = useFavoriteList();
  const isPokemonIsOnTheList = isPokemonOnTheList(Number(pokemonId));

  return (
    <Container>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {id: pokemonId, image: image})
        }>
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
              color={isPokemonIsOnTheList ? '#f2231f' : '#ece8e8'}
              style={{paddingRight: 16}}
            />

            <PokedexNumber>#{pokemonId}</PokedexNumber>
          </View>
        </CardContainer>
      </TouchableOpacity>
    </Container>
  );
}
