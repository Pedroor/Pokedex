import React, {useState, useRef} from 'react';

import {
  Image,
  View,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import {BASE_URL} from '../../constants/index';
import {replacePokemonURL} from '../../utils/replaceStrings';
import {usePokemonsQuery} from '../../hooks/usePokemonsQuery';
import {usePokemonsQueryByName} from '../../hooks/usePokemonsQueryByName';
import {useDebounce} from 'use-debounce';
import {Header} from '../../components/Header';
import {PokemonCard} from '../../components/PokemonCard';
import {Loading} from '../../components/Loading';
import {StatusBar} from '../../components/StatusBar';
import {PokemonResponse} from '../../types/pokemon';
import Left from 'react-native-vector-icons/MaterialIcons';
import Right from 'react-native-vector-icons/MaterialIcons';
import {Container, PaginateTitle, TitleNotFound} from './styles';

import NotFoundImage from '../../assets/notFound.gif';

function Pokedex() {
  const [pokemonName, setPokemonName] = useState('');
  const [value] = useDebounce(pokemonName.toLowerCase(), 500);
  const [endpoint, setEndpoint] = useState(BASE_URL);
  const pokemonQuery = usePokemonsQuery(endpoint);
  const pokemonQueryByName = usePokemonsQueryByName(value);

  const flalistRef: React.RefObject<FlatList> = useRef(null);

  function handleChangePage(isIncrease: boolean) {
    if (isIncrease) {
      setEndpoint(pokemonQuery.data?.next || BASE_URL);
      flalistRef.current?.scrollToOffset({animated: true, offset: 0});
    } else {
      setEndpoint(pokemonQuery.data?.previous || BASE_URL);
      flalistRef.current?.scrollToOffset({animated: true, offset: 0});
    }
  }

  const renderPokemonCards: ListRenderItem<PokemonResponse> = ({item}) => {
    const {name, url} = item;
    const {pokemonId, imageUrl} = replacePokemonURL(url);

    return <PokemonCard image={imageUrl} pokemonId={pokemonId} name={name} />;
  };

  if (pokemonQuery.isLoading || pokemonQueryByName.isLoading) {
    return <Loading />;
  }

  if (pokemonQueryByName.isError) {
    return (
      <Container>
        <Header
          title="Pokédex"
          inputValue={pokemonName}
          setInputValue={setPokemonName}
          subtitle="A Pokédex contem os status detalhados de cada criatura do universo Pokémon."
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TitleNotFound>Pokemon não encontrado!</TitleNotFound>
          <Image style={{width: 300, height: 300}} source={NotFoundImage} />
        </View>
      </Container>
    );
  }

  return (
    <>
      <StatusBar color="#f0f2f5" />
      <Container>
        <Header
          title="Pokédex"
          inputValue={pokemonName}
          setInputValue={setPokemonName}
          subtitle="A Pokédex contem os status detalhados de cada criatura do universo Pokémon."
        />
        {pokemonQueryByName.data !== undefined &&
        pokemonQueryByName.data !== null &&
        value.length > 1 ? (
          <PokemonCard
            image={`https://pokeres.bastionbot.org/images/pokemon/${pokemonQueryByName.data?.id}.png`}
            pokemonId={
              pokemonQueryByName.data?.id !== undefined
                ? pokemonQueryByName.data?.id.toString()
                : ''
            }
            name={pokemonQueryByName.data?.name}
          />
        ) : (
          <FlatList
            ref={flalistRef}
            data={pokemonQuery.data?.results}
            renderItem={renderPokemonCards}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.name}
            ListFooterComponent={() => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => handleChangePage(false)}>
                  <View style={{flexDirection: 'row'}}>
                    <PaginateTitle>Anterior</PaginateTitle>
                    <Left
                      name="chevron-left"
                      size={24}
                      color="#919191"
                      style={{paddingLeft: 10}}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleChangePage(true)}>
                  <View style={{flexDirection: 'row'}}>
                    <Right
                      name="chevron-right"
                      size={24}
                      color="#919191"
                      style={{paddingRight: 10}}
                    />
                    <PaginateTitle>Proxíma</PaginateTitle>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </Container>
    </>
  );
}

export default Pokedex;
