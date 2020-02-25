import React from 'react';
import { View } from 'react-native';

import { Container, Title, Image } from './styles';

export default function Card({ image, artist }) {
  return (
    <Container>
      <Image
        source={{ uri: image }}
        resizeMode='stretch'
      />
      <Title>{artist}</Title>
    </Container>
  );
}
