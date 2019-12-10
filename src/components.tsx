import { ScrollView, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import colors from './colors'

export const DefaultContainer = styled(ScrollView).attrs(() => ({
  centerContent: true,
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}))`
  backgroundColor: ${colors.background};
`;

export const DefaultText = styled(Text)`
  color: ${colors.text};
`;

export const CoverImage = styled(Image)`
  resizeMode: contain;
  width: 200;
  height: 200;
`;