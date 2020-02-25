import React, { useState } from 'react';

import { Container, Title, RecentScrollView } from './styles';

import Card from './Card';

export default function Recents() {
  return (
    <Container>
      <Title>Tocadas recentemente</Title>
      <RecentScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </RecentScrollView>
    </Container>
  )
}
