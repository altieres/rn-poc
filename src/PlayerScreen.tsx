import React from 'react';

import { Audio } from 'expo-av';

import { DefaultContainer, CoverImage, DefaultText } from './components';
import { MaterialIcons } from '@expo/vector-icons';

// require the module
var RNFS = require('react-native-fs');

// create a path you want to write to
// :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
// but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
var path = RNFS.DocumentDirectoryPath + '/test.txt';

console.log(RNFS.DocumentDirectoryPath + '/test.txt');
console.log(RNFS.MainBundlePath);


RNFS.readDir(RNFS.DocumentDirectoryPath + '/../..') // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
  .then((result) => {
    console.log('GOT RESULT', result);

    // stat the first file
    return Promise.all([RNFS.stat(result[0].path), result[0].path]);
  })
  .then((statResult) => {
    if (statResult[0].isFile()) {
      // if we have a file, read it
      return RNFS.readFile(statResult[1], 'utf8');
    }

    return 'no file';
  })
  .then((contents) => {
    // log the file contents
    console.log(contents);
  })
  .catch((err) => {
    console.log(err.message, err.code);
  });


// import jsmediatags from 'jsmediatags';

// jsmediatags.read("/sdcard/Download/burguesinha.mp3", {
//   onSuccess: function(tag) {
//     var tags = tag.tags;
//     alert(tags.artist + " - " + tags.title + ", " + tags.album);
//   }
// });

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
