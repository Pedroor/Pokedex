import React, {ReactNode} from 'react';

import {View, Text} from 'react-native';

interface FavoriteListProps {
  children: ReactNode;
}

function FavoriteList({children}: FavoriteListProps) {
  return (
    <View>
      <Text>FavoriteList</Text>
      {children}
    </View>
  );
}

export default FavoriteList;
