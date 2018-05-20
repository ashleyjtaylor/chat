import firebase from 'firebase';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import config from '../config.json';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import ChatScreen from './screens/ChatScreen';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config.firebase);
  }

  render() {
    const Navigator = createStackNavigator({
      auth: { screen: AuthScreen },
      chat: { screen: ChatScreen }
    });

    return (
      <Provider store={store} style={{ flex: 1 }}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;
