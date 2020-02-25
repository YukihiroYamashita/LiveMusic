import React from 'react';
import { Icon } from 'react-native-elements';

import { Container } from './styles';

export default function Play({ paused, onPress }) {
  return (
    <Container onPress={onPress}>
      <Icon
        type='font-awesome'
        name={paused ? 'pause' : 'play'}
        color='#5C304F'
        size={40}
      />
    </Container>
  );
}