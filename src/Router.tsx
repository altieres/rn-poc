import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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

export default createAppContainer(AppNavigator);