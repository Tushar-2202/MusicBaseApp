import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from 'src/router/Routes';
// Screens Name
import Home from 'src/screens/Authenticated/HomeScreen';
import Profile from 'src/screens/Authenticated/ProfileScreen';
import {StackParamList} from 'src/utils/types';

const Stack = createStackNavigator<StackParamList>();
const Navigator = () => (
  <Stack.Navigator
    initialRouteName={__DEV__ ? Routes.Home : Routes.Home}
    screenOptions={({navigation}) => ({
      headerTitleAlign: 'center',
    })}>
    <Stack.Screen
      name={Routes.Home}
      component={Home}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={Routes.Profile}
      component={Profile}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
export default Navigator;
