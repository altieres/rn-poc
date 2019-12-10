import React from 'react';

import { Audio } from 'expo-av';

import { DefaultContainer, CoverImage, DefaultText } from './components';
import { MaterialIcons } from '@expo/vector-icons';

const play = async () => {
  try {
    const { sound: soundObject, status } = await Audio.Sound.createAsync(
      require('../assets-tmp/burguesinha.mp3'),
      { shouldPlay: true }
    );
  } catch (error) {
    console.log(error);
  }  
}

export default function PlayerScreen() {
  return (
    <DefaultContainer>
      <CoverImage source={require('../assets-tmp/lana-cover.jpg')} />
      <DefaultText>Lana Del Rey</DefaultText>
      <DefaultText>Born to die</DefaultText>
      <MaterialIcons.Button name="play-arrow" borderRadius={100} onPress={play} />
    </DefaultContainer>
  );
}
