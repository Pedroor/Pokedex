import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface EvolutionProps {
  children: ReactNode;
}

function Evolution({ children }: EvolutionProps) {
  return (
    <Container>
      <Text>Evolution</Text>
      {children}
    </Container>
  );
};

export default Evolution;
