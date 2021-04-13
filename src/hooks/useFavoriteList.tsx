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

type FavoriteListProviderProps = {
  children: ReactNode;
};

type FavoriteListContextData = {};

export const FavoriteListContext = createContext<FavoriteListContextData>(
  {} as FavoriteListContextData,
);

export function FavoriteHeroesProvider({children}: FavoriteListProviderProps) {
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
