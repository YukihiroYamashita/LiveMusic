import React from 'react';
import { Icon } from 'react-native-elements';

import { Container, Title, Artist, Column } from './styles';

export default function Header() {
  return (
    <>
      <Container>
        <Icon
          type='font-awesome'
          name='chevron-down'
          color='#c7c7c7'
          containerStyle={{ width: 50 }}
        />
        <Column>
          <Title>TOCANDO DA SUA BIBLIOTECA</Title>
          <Artist>Arctic Monkeys</Artist>
        </Column>
        <Icon
          type='font-awesome'
          name='ellipsis-v'
          color='#c7c7c7'
          containerStyle={{ width: 50 }}
        />
      </Container>
    </>
  );
}
