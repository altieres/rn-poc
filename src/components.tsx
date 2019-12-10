import React from 'react';

import { Text, Image, FlatList, View, StyleSheet, Platform } from 'react-native';
import colors from './colors'
import { TouchableHighlight } from 'react-native-gesture-handler';

export const styles = StyleSheet.create({
  defaultContainer: {
    height: Platform.OS === 'web' ? 'calc(100vh - 50px - 64px)' : null,
    position: Platform.OS === 'web' ? 'absolute' : null,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  defaultText: {
    color: colors.text,
  },
  coverImage: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },
  playableListContainer: {
    width: '100%',
  },
  playableList: {
    height: Platform.OS === 'web' ? 'calc(100vh - 50px - 64px)' : null,
  },
  playableListItem: {
    flex: 1,
    height: 55,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  playableImage: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    marginRight: 10,
  }
})

export const DefaultContainer = (props) => (
  <View style={styles.defaultContainer} {...props}>
    {props.children}
  </View>
);

export const DefaultText = (props) => (
  <Text style={styles.defaultText} {...props}>
    {props.children}
  </Text>
);

export const CoverImage = (props) => (
  <Image style={styles.coverImage} {...props}>
    {props.children}
  </Image>
)

export const PlayableList = (props) => (
  <FlatList
      style={styles.playableListContainer}
      contentContainerStyle={styles.playableList}
      {...props}>
    {props.children}
  </FlatList>
);

export const PlayableListItem = (props) => {
  const { onPress, children, ...rest } = props
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.playableListItem} {...props}>
        {children}
      </View>
    </TouchableHighlight>
  )
};

export const ListImage = (props) => (
  <Image style={styles.playableImage} {...props}>
    {props.children}
  </Image>
);
