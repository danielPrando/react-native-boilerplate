import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { Store } from './store';
import AppNavigator from './views/app.navigator';
import { AuthNavigator } from './views/auth.navigator';

const SwitchNavigator = createAppContainer(
  createSwitchNavigator({
    App: AppNavigator,
    Auth: AuthNavigator,
  },
    {
      initialRouteName: 'Auth'
    })
);

const App = () => (
  <Provider store={Store}>
    <SwitchNavigator />
  </Provider>
);
export default App;