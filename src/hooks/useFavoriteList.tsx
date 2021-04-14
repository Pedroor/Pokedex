import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import {showMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import {Pokemon} from '../types/pokemon';

type FavoriteListProviderProps = {
  children: ReactNode;
};

type FavoriteListContextData = {
  handleAddHeroToFavoriteList: (pokemon: Pokemon) => void;
  favoriteList: Pokemon[];
  isPokemonOnTheList: (id: number) => boolean;
};

export const FavoriteListContext = createContext<FavoriteListContextData>(
  {} as FavoriteListContextData,
);

export function FavoriteListProvider({children}: FavoriteListProviderProps) {
  const [favoriteList, setFavoriteList] = useState<Pokemon[]>([]);

  useEffect(() => {
    getStore();
  }, []);

  async function setStore(favoritePokemon: Pokemon[]) {
    await AsyncStorage.setItem(
      '@FavoriteList',
      JSON.stringify(favoritePokemon),
    );
  }

  async function getStore() {
    let pokemonList = await AsyncStorage.getItem('@FavoriteList');
    if (pokemonList) {
      setFavoriteList(JSON.parse(pokemonList));
    } else {
      return;
    }
  }

  function isPokemonOnTheList(id: number) {
    let existingPokemon = favoriteList.find(
      pokemonInList => pokemonInList.id === id,
    );
    if (!existingPokemon) {
      return false;
    } else {
      return true;
    }
  }

  function handleAddHeroToFavoriteList(pokemon: Pokemon) {
    let existingPokemon = favoriteList.find(
      pokemonInList => pokemonInList.id === pokemon.id,
    );

    if (!existingPokemon) {
      Alert.alert(
        `Você deseja adicionar ${pokemon.name} na sua lista de favoritos?`,
        '',

        [
          {
            text: 'Não',
          },
          {
            text: 'Sim',
            onPress: () => {
              setFavoriteList([...favoriteList, pokemon]),
                showMessage({
                  message: 'Pokemon adicionado com sucesso!',
                  description: 'Que tal consultar sua lista?',
                  type: 'success',
                  icon: 'auto',
                  floating: true,
                  duration: 2000,
                  position: 'top',
                }),
                setStore(favoriteList);
            },
          },
        ],
        {cancelable: true},
      );
    } else {
      let newFavoriteList = favoriteList.filter(
        pokemonInList => pokemonInList.id !== pokemon.id,
      );
      Alert.alert(
        `Vocẽ esta desapontado com ${pokemon.name} ?.`,
        'Desja remove-lo da lista??',

        [
          {
            text: 'Não',
          },
          {
            text: 'Sim',
            onPress: () => {
              setFavoriteList(newFavoriteList),
                showMessage({
                  message: `${pokemon.name} foi removido da sua lista de favoritos!`,
                  description: 'Uma pena para o universo pokemon ):.',
                  type: 'danger',
                  icon: 'auto',
                  floating: true,
                  duration: 2000,
                  position: 'top',
                });
              setStore(newFavoriteList);
            },
          },
        ],
        {cancelable: true},
      );
    }
  }
  return (
    <FavoriteListContext.Provider
      value={{
        isPokemonOnTheList,
        handleAddHeroToFavoriteList,
        favoriteList,
      }}>
      {children}
    </FavoriteListContext.Provider>
  );
}

export function useFavoriteList() {
  const context = useContext(FavoriteListContext);

  return context;
}
