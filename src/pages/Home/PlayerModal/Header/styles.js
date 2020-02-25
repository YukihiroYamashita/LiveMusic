import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: #121212;
`;

export const Column = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #c7c7c7;
`;

export const Artist = styled.Text`
  font-weight: bold;
  color: #f7f7f7;
`;
