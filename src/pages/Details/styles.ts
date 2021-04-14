import styled from 'styled-components/native';

type CardProps = {
  backgroundColor: string;
};

type Icon = {
  color: string;
};

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Card = styled.View<CardProps>`
  width: 100%;
  height: 40%;

  justify-content: center;
  align-items: center;

  background-color: ${props => props.backgroundColor};
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.white};
  ${({theme}) => theme.textVariants.title};
  font-size: 30px;
  text-align: center;
  padding: 15px 6px 10px 12px;
`;

export const Icon = styled.View<Icon>`
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  padding-left: 4px;
  width: 75px;
  height: 30px;
  background-color: ${props => props.color};
  border-width: 0.5px;
  border-radius: 14px;
  border-color: ${props => props.color};
`;

export const TypeName = styled.Text`
  color: ${props => props.theme.colors.white};
  ${({theme}) => theme.textVariants.body1};
  text-align: center;
`;
