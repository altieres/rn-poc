import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import colors from './colors'

export const DefaultContainer = styled(View)`
  flex: 1;
  backgroundColor: ${colors.background};
  alignItems: center;
  justifyContent: center;
`;

export const DefaultText = styled(Text)`
  color: ${colors.text};
`;

export const CoverImage = styled(Image)`
  resizeMode: contain;
  width: 200;
  height: 200;
`;