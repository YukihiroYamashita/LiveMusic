import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;  
  background-color: #121212;
`;

export const PlayerContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  margin-top: 20px;
  margin-bottom: 100px;
`;

export const InfoContainer = styled.View`
  align-items: center;
`;


export const Image = styled.Image`
  margin-top: 100px;
  width: 200px;
  height: 200px;
  border-radius: 15px;
`;

export const Album = styled.Text`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  color: #FFF;
`;

export const Title = styled.Text`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: bold;
  color: #FFF;
`;

export const Artist = styled.Text`
  font-size: 18px;
  color: #FFF;
`;
