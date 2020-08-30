import styled, {css} from 'styled-components/native';

interface containerProps {
  borderColor: string;
}

export const Container = styled.TextInput<containerProps>`
  width: 100%;
  color: white;
  font-family: 'RibeyeMarrow-Regular';
  font-size: 40px;
  margin: 50px 0;
  text-align: center;
  border: 1px #131313 solid;

  ${props =>
    props.borderColor &&
    css`
      border-color: ${props.borderColor};
    `}
`;
