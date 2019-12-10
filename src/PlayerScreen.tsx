import React from 'react';

import { DefaultContainer, CoverImage, DefaultText } from './components';

export default function PlayerScreen() {
  return (
    <DefaultContainer>
      <CoverImage source={require('../assets-tmp/lana-cover.jpg')} />
      <DefaultText>Lana Del Rey</DefaultText>
      <DefaultText>Born to die</DefaultText>
    </DefaultContainer>
  );
}
