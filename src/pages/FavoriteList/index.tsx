import React from 'react';
import PokemonHeader from '../../assets/Pokemon-Header.png';
import {useNavigation} from '@react-navigation/native';
import {View, Image} from 'react-native';
import ArrowBack from 'react-native-vector-icons/Ionicons';
import {PokemonCard} from '../../components/PokemonCard';
import {useFavoriteList} from '../../hooks/useFavoriteList';
import {Container, Title, HeaderContainer} from './styles';

interface FavoriteListProps {}

function FavoriteList({}: FavoriteListProps) {
  const navigation = useNavigation();
  const {favoriteList} = useFavoriteList();

  return (
    <>
      <Container>
        <HeaderContainer>
          <ArrowBack
            name="arrow-back"
            size={32}
            color="black"
            style={{paddingTop: 18}}
            onPress={() => navigation.goBack()}
          />
          <Title>Lista de Favoritos</Title>

          <View />
        </HeaderContainer>
        <Image style={{width: '92%', height: 200}} source={PokemonHeader} />
        {favoriteList.map(pokemon => (
          <>
            <View style={{height: '12%'}}>
              <PokemonCard
                image={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                pokemonId={pokemon.id.toString()}
                name={pokemon.name}
              />
            </View>
          </>
        ))}
      </Container>
    </>
  );
}

export default FavoriteList;
