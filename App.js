/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import HomeScreen from './app/screens/HomeScreen';
import PersonalInfo from './app/screens/PersonalInfo';
import store from './app/redux/Store/Store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
