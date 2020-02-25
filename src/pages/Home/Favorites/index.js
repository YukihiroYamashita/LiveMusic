import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Container, Title, RecentScrollView } from './styles';

import Card from './Card';

export default function Favorites({ data }) {
  function renderItem({ item }) {
    return (
      <Card
        image={item.image}
        artist={item.artist}
      />
    )
  }
  
  return (
    <Container>
      <Title>Os mais escutados</Title>
      <FlatList
        data={data}
        renderItem={item => renderItem(item)}
        keyExtractor={item => String(item.id)}
        style={{flexDirection: 'row', width: '100%', height: 200 }}
        horizontal
      />
    </Container>
  )
}
