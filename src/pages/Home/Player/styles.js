import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #272727;
  border-top-width: 1px;
  border-top-color: #f7f7f7;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #f7f7f7;
  margin-left: 15px;
`;

export const Artist = styled.Text`
  color: #e1e1e1;
`;
