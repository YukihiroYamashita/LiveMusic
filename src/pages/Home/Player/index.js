import React, { useState } from 'react';
import { Icon } from 'react-native-elements';

import { Container, Image, Title, Artist } from './styles';

export default function Player({ onPress }) {
  const [ paused, setPaused ] = useState(false);

  return (
    <Container activeOpacity={1} onPress={onPress}>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/4/4d/Arctic_Monkeys_Humbug.jpg'  }}/>
      <Title>Cornerstone</Title>
      <Artist> - Arctic Monkeys</Artist>
      <Icon
        type='font-awesome'
        name={ paused ? 'pause' : 'play'}
        color='#f7f7f7'
        iconStyle={{ marginLeft: 120 }}
        onPress={() => setPaused(!paused)}
        underlayColor='#272727'
        activeOpacity={1}
      />
    </Container>
  );
}
