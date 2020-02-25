import React from 'react';
import { View } from 'react-native';

import { Container, Title, Image } from './styles';

export default function Card() {
  return (
    <Container>
      <Image
        source={{ uri: 'https://pbs.twimg.com/profile_images/937871221953388544/tBM2QMW-.jpg' }}
        resizeMode='contain'
      />
      <Title>Angra</Title>
    </Container>
  );
}
