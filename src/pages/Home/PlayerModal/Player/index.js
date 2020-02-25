import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { Container, Row } from './styles';

import Progress from './Progress'

export default function Player() {
  const [ paused, setPaused ] = useState(false);

  return (
    <>
      <Progress/>
      <Container>
        <Icon
          type='font-awesome'
          name='random'
          color='#c7c7c7'
        />
        <Icon
          type='font-awesome'
          name='step-backward'
          color='#fff'
          size={26}
        />
        <Icon
          type='font-awesome'
          name={ paused ? 'pause' : 'play'}
          color='#000'
          iconStyle={{ marginLeft: 3 }}
          containerStyle={styles.Play}
          onPress={() => setPaused(!paused)}
        />
        <Icon
          type='font-awesome'
          name='step-forward'
          color='#fff'
          size={26}
        />
        <Icon
          type='font-awesome'
          name='repeat'
          color='#c7c7c7'
        />
      </Container>
      <Row>
        <Icon
          type='font-awesome'
          name='mobile'
          color='#c7c7c7'
        />
        <Icon
          type='font-awesome'
          name='list'
          color='#c7c7c7'
        />
      </Row>
    </>
  );
}

const styles = StyleSheet.create({
  Play: { 
    justifyContent:'center', 
    alignItems: 'center',
    width: 60,
    height: 60, 
    backgroundColor: '#f7f7f7', 
    borderRadius: 60 
  }
})