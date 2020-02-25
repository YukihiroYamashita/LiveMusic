import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

import Card from './Card';

export default function Bottom() {
  return (
    <Container>
      <Card
        name='home'
        title='Início'
        selected
      />
      <Card
        name='search'
        title='Buscar'
        selected={false}
      />
      <Card
        name='book'
        title='Sua Biblioteca'
        selected={false}
      />
    </Container>
  );
}
