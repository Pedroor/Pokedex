import React, {useEffect, useMemo} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {View, Text, Image} from 'react-native';
import getColorByPokemonType from '../../utils/getPokemonColor';
import {usePokemonsQueryById} from '../../hooks/usePokemonsQuery';
import {Card, Container, Title, Icon, TypeName} from './styles';

type ParamList = {
  Details: {
    id: string;
    image: string;
  };
};

function Details() {
  const route = useRoute<RouteProp<ParamList, 'Details'>>();
  const {id, image} = route.params;
  const pokemon = usePokemonsQueryById(id);
  const primaryType = useMemo(
    () => getColorByPokemonType(pokemon.data?.types[0].type.name || ''),
    [pokemon.data?.types],
  );

  const secondaryType = useMemo(
    () => getColorByPokemonType(pokemon.data?.types[1].type.name || ''),
    [pokemon.data?.types],
  );

  useEffect(() => {
    console.log(pokemon.data?.base_experience);

    console.log(
      pokemon.data?.types[0].type.name || '',
      pokemon.data?.types[1].type.name || '',
    );
  }, []);

  return (
    <Container>
      <Card backgroundColor={primaryType}>
        <Title>{pokemon.data?.name}</Title>
        <Image source={{uri: image}} style={{width: 200, height: 200}} />
      </Card>
      <View style={{flexDirection: 'row'}}>
        <Icon color={primaryType}>
          <TypeName>{pokemon.data?.types[0].type.name || ''}</TypeName>
        </Icon>
        <Icon color={secondaryType}>
          <TypeName>{pokemon.data?.types[1].type.name || ''}</TypeName>
        </Icon>
      </View>
    </Container>
  );
}

export default Details;
