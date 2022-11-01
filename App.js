import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import Newsa from './Newsa';
const AppStack = createStackNavigator();
const App = () => {
  return (<NavigationContainer>
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="welcome" component={Newsa} />
    </AppStack.Navigator>
  </NavigationContainer>
  )
}

export default (App);
