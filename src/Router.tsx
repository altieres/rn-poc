import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { MaterialIcons } from '@expo/vector-icons';

import PlayerScreen from './PlayerScreen'
import colors from './colors';
import { LibraryScreen } from './LibraryScreen';
import { BuddiesScreen } from './BuddiesScreen';

const defaultOptions = {
  initialRouteName: 'Default',
  defaultNavigationOptions: {
    title: 'BuddyBox',
    headerStyle: {
      backgroundColor: colors.highlightedBackground,
    },
    headerTintColor: colors.highlightedText,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};

const LibraryNavigator = createStackNavigator({
    Default: LibraryScreen
  }, defaultOptions
);

const PlayerNavigator = createStackNavigator({
    Default: PlayerScreen
  }, defaultOptions
);

const BuddiesNavigator = createStackNavigator({
    Default: BuddiesScreen
  }, defaultOptions
);


const TabNavigator = createBottomTabNavigator({
  Library: LibraryNavigator,
  Player: PlayerNavigator,
  Buddies: BuddiesNavigator,
}, {
  initialRouteName: 'Player',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = MaterialIcons;
      let iconName;

      if (routeName === 'Library') {
        iconName = 'library-music';
      } else if (routeName === 'Player') {
        iconName = 'play-circle-outline';
      } else if (routeName === 'Buddies') {
        iconName = 'pets';
      }

      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: colors.highlightedBackground,
    inactiveTintColor: colors.background,
  },
});


export default createAppContainer(TabNavigator);