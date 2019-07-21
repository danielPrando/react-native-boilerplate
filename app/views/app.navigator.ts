import { createStackNavigator } from 'react-navigation';
import { Birds } from './birds/birds';
import { Home } from './home/home';

export const AppNavigator = createStackNavigator({
  Birds: {
    screen: Birds,
  },
  Home: {
    screen: Home,
  },
}, {
    initialRouteName: 'Home',
  });

export default AppNavigator;