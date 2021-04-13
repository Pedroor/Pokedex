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
import {PokemonResponse} from '../types/pokemon';

type FavoriteListProviderProps = {
  children: ReactNode;
};

type FavoriteListContextData = {};

export const FavoriteListContext = createContext<FavoriteListContextData>(
  {} as FavoriteListContextData,
);

export function FavoriteListProvider({children}: FavoriteListProviderProps) {
  const [favoriteList, setFavoriteList] = useState<PokemonResponse[]>([]);

  async function setStore(favoritePokemon: PokemonResponse[]) {
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
  return (
    <FavoriteListContext.Provider value={{}}>
      {children}
    </FavoriteListContext.Provider>
  );
}

export function useFavoriteList() {
  const context = useContext(FavoriteListContext);

  return context;
}
