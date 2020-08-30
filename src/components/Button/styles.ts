import styled, {css} from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

interface ContainerProps {
  color: string;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 80%;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 30px;

  align-items: center;
  justify-content: center;

  ${props =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
`;

export const ButtonText = styled.Text`
  color: white;
  font-family: 'RibeyeMarrow-Regular';
  font-size: 36px;
`;
