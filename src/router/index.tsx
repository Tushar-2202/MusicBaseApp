import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Splash from 'src/screens/Splash';
import UnAuthenticated from './UnAuthenticated';
import Authenticated from './Authenticated';

import Routes from './Routes';

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator
    initialRouteName={Routes.Splash}
    screenOptions={{headerShown: false}}>
    <Stack.Screen name={Routes.Splash} component={Splash} />

    <Stack.Screen name={Routes.UnAuthenticated} component={UnAuthenticated} />

    <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
  </Stack.Navigator>
);

export default Navigator;
