import React, {useEffect} from 'react';
import PokemonHeader from '../../assets/Pokemon-Header.png';
import {View, Text, Image, ListRenderItem} from 'react-native';
import {PokemonCard} from '../../components/PokemonCard';
import {useFavoriteList} from '../../hooks/useFavoriteList';
import {Container} from './styles';
import {Pokemon} from '../../types/pokemon';

interface FavoriteListProps {}

function FavoriteList({}: FavoriteListProps) {
  const {favoriteList} = useFavoriteList();

  useEffect(() => {
    console.log(favoriteList.length);
  }, []);

  return (
    <>
      <Container>
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
