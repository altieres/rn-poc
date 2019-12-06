import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

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

const TabNavigator = createBottomTabNavigator({
  Home: AppNavigator,
  Settings: PlayerScreen,
});


export default createAppContainer(TabNavigator);