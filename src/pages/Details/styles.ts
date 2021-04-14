import styled from 'styled-components/native';

type CardProps = {
  primaryColor: string;
};

type ProgressBarProps = {
  primaryColor: string;
  w: string;
};

type Icon = {
  color: string;
};

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: 5%;
`;

export const Card = styled.View<CardProps>`
  width: 100%;
  height: 40%;
  justify-content: center;

  background-color: ${props => props.primaryColor};
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.white};
  ${({theme}) => theme.textVariants.title};
  font-size: 28px;
  text-align: center;
  padding: 36px 22px 0 0;
`;

export const PokedexNumber = styled.Text`
  color: ${props => props.theme.colors.white};
  ${({theme}) => theme.textVariants.title};
  font-size: 22px;
  text-align: center;
  padding: 8px 6px 10px 12px;
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

export const DataContainer = styled.View`
  flex: 1;
  padding-top: 10px;
`;

export const Subtitle = styled.Text<CardProps>`
  padding: 12px;
  color: ${props => props.primaryColor};
  ${({theme}) => theme.textVariants.body1};
  font-size: 22px;
  font-weight: bold;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  padding: 12px;
  color: ${props => props.theme.colors.grey};
  ${({theme}) => theme.textVariants.body1};
`;

export const Content = styled.Text<CardProps>`
  padding: 12px;
  ${({theme}) => theme.textVariants.body1};
  color: ${props => props.primaryColor};
`;

export const ProgressBar = styled.View<ProgressBarProps>`
  height: 4px;
  margin-right: 12px;
  width: 200px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  border-radius: 4px;
  background-color: ${props => props.primaryColor};
`;

export const FavoriteListButton = styled.TouchableOpacity<CardProps>`
  height: 48px;
  width: 60%;
  margin-top: 8px;
  border-width: 0.5;
  border-color: ${props => props.theme.colors.lightGrey};
  border-radius: 24px;

  justify-content: center;
  align-items: center;
  background-color: ${props => props.primaryColor};
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  ${({theme}) => theme.textVariants.body1};
  text-align: center;
`;

export const ButtonContainer = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;
