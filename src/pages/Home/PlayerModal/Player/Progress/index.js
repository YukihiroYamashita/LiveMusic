import React from 'react';
import { View } from 'react-native';

import { Container, Line, Start, Final, Row } from './styles';

export default function Progress() {
  return (
   <Container>
     <Line/>
     <Row>
      <Start>0:02</Start>
      <Final>3:45</Final>
     </Row>
   </Container>
  );
}
