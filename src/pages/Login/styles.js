import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #7d40e7;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 6%;
  resize-mode: contain;
`;

export const Input = styled.TextInput.attrs({
  placeHolderColor: '#999999',
})`
  background-color: #fff;
  align-self: stretch;
  padding: 10px 15px;
  margin-top: 40px;
  margin-bottom: 20px;
  border-radius: 4px;
  font-size: 16px;
`;
