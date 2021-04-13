import React, {ReactNode, useEffect} from 'react';

import {
  Container,
  Input,
  InputArea,
  Title,
  Subtitle,
  InputContainer,
} from './styles';
import Search from 'react-native-vector-icons/FontAwesome';
import Option from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
  children?: ReactNode;
  title: string;
  subtitle: string;
  inputValue: string;
  setInputValue: (value: string) => void;
}

export function Header({
  children,
  title,
  subtitle,
  inputValue,
  setInputValue,
  ...rest
}: HeaderProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <InputContainer>
        <InputArea>
          <Search name="search" size={18} color="#919191" />

          <Input
            value={inputValue}
            onChangeText={value => setInputValue(value)}
            placeholder="Busque por um Pokémon..."
            {...rest}
          />
        </InputArea>
        <Option
          name="options-outline"
          size={24}
          color="#919191"
          style={{paddingLeft: 8}}
        />
      </InputContainer>

      <Subtitle>
        A Pokédex contem os status detalhados de cada criatura do universo
        Pokémon
      </Subtitle>
    </Container>
  );
}
