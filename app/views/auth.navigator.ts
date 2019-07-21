import { createStackNavigator } from 'react-navigation'
import { Login } from './login/login';

export const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
  },
  { headerMode: 'none' }
);