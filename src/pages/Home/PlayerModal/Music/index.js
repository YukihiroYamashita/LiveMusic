import React from 'react';
import { Icon } from 'react-native-elements';

import { Container, Title, Artist, Column } from './styles';

export default function Music() {
  return (
    <>
      <Container>
        <Column>
          <Title>One Point Perspective</Title>
          <Artist>Arctic Monkeys</Artist>
        </Column>
        <Icon
          type='font-awesome'
          name='heart'
          color='#c7c7c7'
        />
      </Container>
    </>
  );
}
