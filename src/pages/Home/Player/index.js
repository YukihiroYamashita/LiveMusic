import React from 'react';
import { Icon } from 'react-native-elements';

import { Container, Image, Title, Artist } from './styles';

export default function Player({ onPress }) {
  return (
    <Container onPress={onPress}>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/4/4d/Arctic_Monkeys_Humbug.jpg'  }}/>
      <Title>Cornerstone</Title>
      <Artist> - Arctic Monkeys</Artist>
      <Icon
        type='font-awesome'
        name='play'
        color='#f7f7f7'
        iconStyle={{ marginLeft: 120 }}
      />
    </Container>
  );
}
