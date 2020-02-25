import React, { useState } from 'react';

import { Container } from './styles';

import Header from '../../components/Header'

import Recents from './Recents'
import Artists from './Artists'
import Favorites from './Favorites'
import Player from './Player'
import Bottom from './Bottom'
import PlayerModal from './PlayerModal'

const recents = [
  {
    id: 0,
    image: 'https://upload.wikimedia.org/wikipedia/pt/2/2c/Pmorecover.png',
    artist: 'Paramore'
  },
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsaFvQyFOmWXM_gXyffrzt-3Fti8pN3WyQVhXLakUs30w0BsCz',
    artist: 'Bring me the Horizon'
  },
  {
    id: 3,
    image: 'https://ogimg.infoglobo.com.br/in/9770584-d47-4db/FT1086A/652/x2013-641017276-2013082822143.jpg_20130828.jpg.pagespeed.ic.0HEbXZMNhS.jpg',
    artist: 'Arctic Monkeys'
  },
  {
    id: 4,
    image: 'https://pbs.twimg.com/profile_images/937871221953388544/tBM2QMW-.jpg',
    artist: 'Angra'
  }
]

const favorites = [
  {
    id: 0,
    image: 'https://i.ytimg.com/vi/8P2P4xYv55M/maxresdefault.jpg',
    artist: 'Eden'
  },
  {
    id: 1,
    image: 'https://studiosol-a.akamaihd.net/tb/letras-blog/wp-content/uploads/2019/07/d03c1fa-slipknot.jpg',
    artist: 'Slipknot'
  },
  {
    id: 3,
    image: 'https://upload.wikimedia.org/wikipedia/pt/2/22/Legi%C3%A3o_Urbana.jpg',
    artist: 'Legião Urbana'
  },
  {
    id: 4,
    image: 'https://upload.wikimedia.org/wikipedia/pt/d/d3/Linkin_Park_Minutes_to_Midnight.jpg',
    artist: 'Linkin Park'
  }
]

const artist = [
  {
    id: 0,
    image: 'https://upload.wikimedia.org/wikipedia/pt/2/2f/CapaBar%C3%A3o_Vermelho.jpg',
    artist: 'Barão vermelho'
  },
  {
    id: 1,
    image: 'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/07/los-hermanos.jpg',
    artist: 'Los Hermanos'
  },
  {
    id: 2,
    image: 'https://www.folhape.com.br/obj/11/371322,475,80,0,0,475,365,0,0,0,0.jpg',
    artist: 'The Strokes'
  },
  {
    id: 3,
    image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/8/e/0/9/316301381317371.jpg',
    artist: 'Charlie Brown Jr'
  }
]

export default function Home() {
  const [ visible, setVisible ] = useState(false);

  function handleAnimation() {
    setVisible(!visible);
  }

  return (
    <>
      <PlayerModal 
        visible={visible}
        onClosePress={handleAnimation}
      />
      <Header/>
      <Container>
        <Recents data={recents}/>
        <Favorites data={favorites}/>
        <Artists data={artist}/>
      </Container>
      <Player
        onPress={handleAnimation}
      />
      <Bottom/>
    </>
  )
}
