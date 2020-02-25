import React from 'react';
import { Overlay } from 'react-native-elements';

import { Container, Album, View } from './styles';

import Header from './Header'
import Music from './Music'
import Player from './Player'

export default function PlayerModal({ visible, onClosePress }) {
  return (
    <Overlay
      isVisible={visible}
      overlayStyle={{ padding: 0 }}
      fullScreen
      animationType='slide'
    >
      <Header
        onClosePress={onClosePress}
      />
      <Container>
        <Album
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/4/4d/Arctic_Monkeys_Humbug.jpg' }}
          resizeMode='stretch'
        />
        <Music
          artist='Arctic Monkeys'
          music='Cornerstone'
        />
        <Player/>
      </Container>
    </Overlay>
  )
}