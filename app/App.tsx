import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { Birds } from './components/birds/birds';
import { NewBird } from './components/new-bird/newBird';
import { Store } from './store';

const App = () => {
  return (
    <Provider store={Store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
         <NewBird />
         <Birds />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;