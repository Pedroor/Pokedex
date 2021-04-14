import React, {useEffect, useMemo, useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {View, Text, Image} from 'react-native';
import getColorByPokemonType from '../../utils/getPokemonColor';
import {usePokemonsQueryById} from '../../hooks/usePokemonsQuery';
import {
  Card,
  Container,
  Title,
  Icon,
  TypeName,
  DataContainer,
  Subtitle,
  Label,
  Content,
  RowContainer,
  ProgressBar,
  FavoriteListButton,
  ButtonContainer,
  ButtonText,
} from './styles';
import Pokeball from 'react-native-vector-icons/MaterialCommunityIcons';

type ParamList = {
  Details: {
    id: string;
    image: string;
  };
};

function Details() {
  const route = useRoute<RouteProp<ParamList, 'Details'>>();
  const [secondaryType, setSecondaryType] = useState('#FFF');
  const {id, image} = route.params;
  const pokemon = usePokemonsQueryById(id);
  const primaryType = useMemo(
    () => getColorByPokemonType(pokemon.data?.types[0].type.name || ''),
    [pokemon.data?.types],
  );

  useEffect(() => {
    if (pokemon.data?.types[1] !== undefined) {
      let secondaryTypeMemo = getColorByPokemonType(
        pokemon.data?.types[1].type.name || '#FFF',
      );

      setSecondaryType(secondaryTypeMemo);
    }
  }, [pokemon.data?.types[1]]);

  function renderStats() {
    return pokemon.data?.stats.map((atribute, key) => {
      {
        console.log('OI');
      }
      <RowContainer key={key}>
        <Label>{atribute.stat.name.toLocaleLowerCase()}</Label>
        <Content primaryColor={primaryType}> {atribute.base_stat}</Content>
      </RowContainer>;
    });
  }

  return (
    <Container>
      <Card primaryColor={primaryType}>
        <Title>{pokemon.data?.name}</Title>
        <Image source={{uri: image}} style={{width: 200, height: 200}} />
      </Card>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon color={primaryType}>
          <TypeName>{pokemon.data?.types[0].type.name || ''}</TypeName>
        </Icon>
        {pokemon.data?.types[1] !== undefined ? (
          <Icon color={secondaryType}>
            <TypeName>{pokemon.data?.types[1].type.name || ''}</TypeName>
          </Icon>
        ) : (
          <View />
        )}
      </View>
      <DataContainer>
        <Subtitle primaryColor={primaryType}>Status</Subtitle>

        {pokemon.data?.stats.map((atribute, key) => (
          <RowContainer key={key}>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                justifyContent: 'space-between',
              }}>
              <Label>{atribute.stat.name}</Label>
              <Content primaryColor={primaryType}>
                {' '}
                {atribute.base_stat}
              </Content>
            </View>
            <ProgressBar
              primaryColor={primaryType}
              w={atribute.base_stat.toString()}></ProgressBar>
          </RowContainer>
        ))}
      </DataContainer>
      <ButtonContainer>
        <FavoriteListButton primaryColor={primaryType}>
          <View style={{flexDirection: 'row'}}>
            <Pokeball
              name="pokeball"
              size={22}
              color="#ece8e8"
              style={{paddingRight: 16}}
            />
            <ButtonText>Adicionar aos favoritos</ButtonText>
          </View>
        </FavoriteListButton>
      </ButtonContainer>
    </Container>
  );
}

export default Details;
