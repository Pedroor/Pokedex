import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Details, FavoriteList, Pokedex} from './pages';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Pokedex" component={Pokedex} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="FavoriteList" component={FavoriteList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
