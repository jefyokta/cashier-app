/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { ReactElement, useEffect, useState } from 'react';
import { Merchant } from './src/Pages/Newuser/Merchant';
import { Splash } from './src';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Users } from './models/Users/Users';
import { Dashboard } from './src/Pages/Dashboard/Index';
export type RootStackParamList = {
  splash: undefined;
  welcome: undefined;
  home: undefined;
  dashboard:undefined
};

export type NavigationProp<RouteName extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, RouteName>;

const App: React.FC = (): ReactElement => {



  const Stack = createNativeStackNavigator<RootStackParamList>()


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{

        headerShown:false
      }}>
        <Stack.Screen name='splash' component={Splash} options={{ title: 'home' }} />
        <Stack.Screen name='welcome'  component={Merchant} />
        <Stack.Screen name='dashboard'  component={Dashboard} />

      </Stack.Navigator>
    </NavigationContainer>
  )




}

export default App;
