import React from 'react';
import { Icon } from 'react-native-elements';

import { Container, Title } from './styles';

export default function Card({ name, title, selected }) {
  return (
    <Container>
      <Icon
        type='font-awesome'
        name={name}
        color={selected ? '#f7f7f7' : '#c7c7c7'}
      />
      <Title style={selected ? { color: '#f7f7f7' } : null }>{title}</Title>
    </Container>
  );
}
