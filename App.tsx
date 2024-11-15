/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { ReactElement, useEffect, useState } from 'react';
import { Merchant } from './src/Pages/Newuser/Merchant';
import { Splash } from './src';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Users } from './models/Users/Users';
export type RootStackParamlist = {
  splash: undefined;
  welcome: undefined;
  home: undefined;
  starter: {
    username: string
  }
};


const App: React.FC = (): ReactElement => {

  const [isInit, setIsInit] = useState(false)

  useEffect(() => {
    const Check = async () => {
      const user = new Users();
      const empty = await user.isEmpty()
      setIsInit(!empty)
      console.log(empty)

    }
    Check()
  }, [isInit])



  const Stack = createNativeStackNavigator<RootStackParamlist>()

  if (!isInit) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='welcome' options={{ headerShown: false }} component={Merchant} />
          <Stack.Screen name='splash' component={Splash} options={{ title: 'home', headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name='Home' options={{ headerShown: false }} component={Merchant} /> */}
          <Stack.Screen name='splash' component={Splash} options={{ title: 'home', headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )

  }


}

export default App;
