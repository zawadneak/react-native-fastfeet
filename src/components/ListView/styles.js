import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid #ddd;
  margin: 10px 0px;
  border-radius: 4px;
`;

export const Top = styled.View`
  justify-content: center;
  padding: 10px;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 10px;
`;

export const ProgressBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const DotHolder = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Dot = styled.View`
  height: 12px;
  width: 12px;
  border: 1px solid #7d40e7;
  background: ${props => (props.done ? '#7d40e7' : '#fff')}
  border-radius: 6px;
`;

export const Line = styled.View`
  width: 60px;
  border: 1px solid #7d40e7;
`;

export const TextBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: -20px;
  margin-left: 10px;
  padding: 10px 40px;
`;

export const DotLabel = styled.Text`
  font-size: 12px;
  color: #999999;
`;

export const Bottom = styled.View`
  padding: 20px;
  background-color: #f8f9fd;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Holder = styled.View``;

export const Label = styled.Text`
  color: #999999;
  font-size: 10px;
`;

export const Content = styled.Text`
  color: #444444;
  font-size: 14px;
  font-weight: bold;
`;

export const DetailButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const DetailTitle = styled.Text`
  font-weight: bold;
  color: #7d40e7;
  margin-top: 12px;
`;
