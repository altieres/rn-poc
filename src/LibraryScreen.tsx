import React from 'react';
import { DefaultContainer, DefaultText, PlayableList, PlayableListItem, ListImage } from './components';

const fakeData = [...Array(50).keys()].map((item) => (
  { key: `${item}`, title: `Music ${item + 1}` }
))

export const LibraryScreen = () => (
  <DefaultContainer>
    <PlayableList
      data={fakeData}
      renderItem={({item}) => (
        <PlayableListItem>
          <ListImage source={require('../assets-tmp/lana-cover.jpg')} />
          <DefaultText>{item.title}</DefaultText>
        </PlayableListItem>
      )}
    />
  </DefaultContainer>
);
