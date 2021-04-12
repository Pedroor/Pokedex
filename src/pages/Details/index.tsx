import React, {ReactNode} from 'react';

import {View, Text} from 'react-native';

interface DetailsProps {
  children: ReactNode;
}

function Details({children}: DetailsProps) {
  return (
    <View>
      <Text>Details</Text>
      {children}
    </View>
  );
}

export default Details;
