import React from 'react';

import { Audio } from 'expo-av';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

import { DefaultContainer, CoverImage, DefaultText } from './components';
import { MaterialIcons } from '@expo/vector-icons';

const play = async () => {

  const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status === 'granted') {
    console.log('Location permission granted!');
  } else {
    throw new Error('Location permission not granted');
  }

  const options = {
    first: 10,
  }
  const p = MediaLibrary.getAssetsAsync(options);
  p.then((a) => {
    console.log(a);
  })

  try {
    console.log('starting...');
    const { sound: soundObject, status } = await Audio.Sound.createAsync(
      require('../assets-tmp/burguesinha.mp3'),
      { shouldPlay: true }
    );
  } catch (error) {
    console.log(error);
  }  
  console.log('started!!!');
}

export default function PlayerScreen() {
  console.log(FileSystem.documentDirectory);
  const file = FileSystem.documentDirectory + 'myFile';
  FileSystem.writeAsStringAsync(file, "super test")
  
  return (
    <DefaultContainer>
      <CoverImage source={require('../assets-tmp/lana-cover.jpg')} />
      <DefaultText>Lana Del Rey</DefaultText>
      <DefaultText>Teste</DefaultText>
      <MaterialIcons.Button name="play-arrow" borderRadius={100} onPress={play} />
    </DefaultContainer>
  );
}
