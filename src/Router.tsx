import React from 'react';
import { DefaultContainer, DefaultText, CoverImage } from './components';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { MaterialIcons } from '@expo/vector-icons';

import PlayerScreen from './PlayerScreen'
import colors from './colors';

const AppNavigator = createStackNavigator({
  Player: PlayerScreen
},
{
  initialRouteName: 'Player',
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
});

const LibraryScreen = () => <DefaultContainer>
  <DefaultText>Library</DefaultText>
</DefaultContainer>;

const BuddiesScreen = () => <DefaultContainer>
  <DefaultText>Buddies</DefaultText>
</DefaultContainer>;

const TabNavigator = createBottomTabNavigator({
  Library: LibraryScreen,
  Player: AppNavigator,
  Buddies: BuddiesScreen,
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