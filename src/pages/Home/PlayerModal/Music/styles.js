import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin-top: 50px;
  background-color: #121212;
`;

export const Column = styled.View`
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #f7f7f7;
`;

export const Artist = styled.Text`
  color: #c7c7c7;
`;
