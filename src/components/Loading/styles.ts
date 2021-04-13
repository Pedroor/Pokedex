import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  justify-content: center;
  align-items: center;
`;

export const TitleLoading = styled.Text`
  color: ${props => props.theme.colors.black};
  ${({theme}) => theme.textVariants.title};
  padding: 30px 0 10px 0;
`;
