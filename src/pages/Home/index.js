import React, { useState } from 'react';
import { Icon } from 'react-native-elements';

import { Container, Image, Title, Album, Artist, PlayerContainer, InfoContainer } from './styles';

import Header from '../../components/Header'

import Recents from './Recents'
import Artists from './Artists'
import Favorites from './Favorites'
import Player from './Player'
import Bottom from './Bottom'
import PlayerModal from './PlayerModal'

export default function Home() {
  // return <PlayerModal/>
  return (
    <>
      <Header/>
      <Container>
        <Recents/>
        <Favorites/>
        <Artists/>
      </Container>
      <Player/>
      <Bottom/>
    </>
  )
}
