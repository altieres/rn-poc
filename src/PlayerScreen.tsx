import React from 'react';

import { DefaultContainer, DefaultText, CoverImage } from './components';

export default function PlayerScreen() {
  return (
    <DefaultContainer>
      <CoverImage source={require('../assets-tmp/lana-cover.jpg')} />
      <DefaultText>Open up App.tsx to start working on your app!</DefaultText>
    </DefaultContainer>
  );
}
