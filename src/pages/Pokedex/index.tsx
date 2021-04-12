import React, {ReactNode} from 'react';

import {View, Text, StyleSheet} from 'react-native';

interface PokedexProps {
  children: ReactNode;
}

function Pokedex({children}: PokedexProps) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontFamily: 'Montserrat-ExtraBold'}}>Pokedex</Text>
      <Text style={{fontFamily: 'Montserrat-Regular'}}>Pokedex</Text>
      <Text style={{fontFamily: 'Montserrat-Medium'}}>Pokedex</Text>
      <Text style={{fontFamily: 'Montserrat-SemiBold'}}>Pokedex</Text>
      <Text style={{fontFamily: 'Montserrat-ExtraBold'}}>Pokedex</Text>
      <Text style={{fontFamily: 'Montserrat-ExtraBold'}}>Pokedex</Text>
      <Text style={{fontFamily: 'Montserrat-ExtraBold'}}>Pokedex</Text>
      {children}
    </View>
  );
}

export default Pokedex;
