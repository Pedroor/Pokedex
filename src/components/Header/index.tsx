import React, {ReactNode} from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Input,
  InputArea,
  Title,
  Subtitle,
  InputContainer,
  HeaderContainer,
} from './styles';
import Search from 'react-native-vector-icons/FontAwesome';
import Option from 'react-native-vector-icons/Ionicons';
import Trash from 'react-native-vector-icons/FontAwesome';
import Pokeball from '../../assets/pokeball.jpg';
import {TouchableOpacity} from 'react-native';

interface HeaderProps {
  children?: ReactNode;
  title: string;
  subtitle: string;
  inputValue?: string;
  setInputValue: (value: string) => void;
}

export function Header({
  children,
  title,
  subtitle,
  inputValue,
  setInputValue = () => {},
  ...rest
}: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderContainer>
        <Title>{title}</Title>
        <TouchableOpacity onPress={() => navigation.navigate('FavoriteList')}>
          <Image
            style={{width: 68, height: 68, marginBottom: 5}}
            source={Pokeball}
          />
        </TouchableOpacity>
      </HeaderContainer>

      <InputContainer>
        <InputArea>
          <Search name="search" size={18} color="#919191" />

          <Input
            value={inputValue}
            onChangeText={value => setInputValue(value)}
            placeholder="Busque por um Pokémon..."
            {...rest}
          />
          <Trash
            name="trash-o"
            onPress={() => setInputValue('')}
            size={24}
            color="#f2231f"
            style={{paddingRight: 10}}
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
        Pokémon.
      </Subtitle>
    </Container>
  );
}
