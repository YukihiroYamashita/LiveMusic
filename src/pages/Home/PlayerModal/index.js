import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { Container, Album, View } from './styles';

import Header from './Header'
import Music from './Music'
import Player from './Player'

export const PlayerModal = React.forwardRef(({ style }, ref) => {
  return (
    <View style={style}>
      <Header/>
      <Container>
        <Album
          source={{ uri: 'https://armazemdovinil.com/wp-content/uploads/2018/07/7898324315725-LP-ARCTIC-MONKEYS_TRANQUILITY-BASE-HOTEL-CASINO-26.06.18-510x510.jpg' }}
          resizeMode='stretch'
        />
        <Music/>
        <Player/>
      </Container>
    </View>
  )
})