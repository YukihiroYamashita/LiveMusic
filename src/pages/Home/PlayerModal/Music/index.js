import React from 'react';
import { Icon } from 'react-native-elements';

import { Container, Title, Artist, Column } from './styles';

export default function Music({ artist, music }) {
  return (
    <>
      <Container>
        <Column>
          <Title>{music}</Title>
          <Artist>{artist}</Artist>
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
