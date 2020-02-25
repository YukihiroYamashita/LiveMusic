import React, { useState } from 'react';

import { Container, Title, RecentScrollView } from './styles';

import Card from './Card';

export default function Favorites() {
  return (
    <Container>
      <Title>Os mais escutados</Title>
      <RecentScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </RecentScrollView>
    </Container>
  )
}
