import styled from 'styled-components/native';
import theme from '../../styles/theme';

type CardContainerProps = {
  color: string;
};

export const Container = styled.View`
  flex: 1;
  margin: 15px;
`;

export const CardContainer = styled.View<CardContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  height: 82px;
  width: 98%;
  padding-left: 12px;
  border-width: 0.5px;
  border-color: ${props => props.theme.colors.lightGrey};
  border-radius: 15px;
  background-color: ${props => props.theme.colors.grey};
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.white};
  ${({theme}) => theme.textVariants.title};
  padding: 15px 6px 10px 12px;
`;

export const PokedexNumber = styled.Text`
  color: ${props => props.theme.colors.lightGrey};
  ${({theme}) => theme.textVariants.pokedexNumber};
  padding: 32px 16px 12px 12px;
`;
