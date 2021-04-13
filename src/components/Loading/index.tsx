import React from 'react';
import {Image} from 'react-native';
import {Container, TitleLoading} from './styles';
import LoadingImage from '../../assets/loading.gif';
import {Header} from '../../components/Header';

export function Loading() {
  return (
    <>
      <Header
        title="Pokédex"
        subtitle="A Pokédex contem os status detalhados de cada criatura do universo Pokémon.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
        setInputValue={() => {}}
      />
      <Container>
        <TitleLoading>Carregando...</TitleLoading>
        <Image style={{width: 400, height: 400}} source={LoadingImage} />
      </Container>
    </>
  );
}
