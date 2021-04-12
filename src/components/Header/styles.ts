import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 15px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.title};
  ${({theme}) => theme.textVariants.title};
  padding: 15px 0 10px 0;
`;

export const Subtitle = styled.Text`
  color: ${props => props.theme.colors.grey};
  line-height: 20px;
  font-size: 16px;
  font-weight: bold;
  padding-top: 18px;
`;

export const InputArea = styled.View`
  padding: 0 15px;
  flex-direction: row;
  align-items: center;

  width: 92%;
  background-color: ${props => props.theme.colors.lowGrey};
  height: 37px;
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  ${({theme}) => theme.textVariants.input};
  padding: 0 10px;
  width: 90%;
`;
