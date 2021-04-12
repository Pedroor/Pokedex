/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {QueryClientProvider} from 'react-query';
import {queryClient} from './src/services/query-client';
import theme from './src/styles/theme';

import Routes from './src/routes';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
