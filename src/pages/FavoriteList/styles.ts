import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;
export const Title = styled.Text`
  color: ${props => props.theme.colors.title};
  ${({theme}) => theme.textVariants.title};
  padding: 30px 0 10px 0;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;
