import React from 'react';
import { Icon } from 'react-native-elements';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Icon
        type='font-awesome'
        name='cog'
        color='#f7f7f7'
      />
    </Container>
  );
}
