import React, { useState } from 'react';

import { Container, Title, RecentScrollView } from './styles';

import Card from './Card';

export default function Artists() {
  return (
    <Container>
      <Title>Seus artistas favoritos</Title>
      <RecentScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </RecentScrollView>
    </Container>
  )
}
