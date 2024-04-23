import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from 'src/router/Routes';
// Screens Name
import Home from 'src/screens/Authenticated/Home';
import {StackParamList} from 'src/utils/types';

const Stack = createStackNavigator<StackParamList>();
const Navigator = () => (
  <Stack.Navigator
    initialRouteName={__DEV__ ? Routes.Home : Routes.Home}
    screenOptions={{
      headerTitleAlign: 'center',
      headerShown: false,
    }}
  >
    <Stack.Screen name={Routes.Home} component={Home} />
  </Stack.Navigator>
);
export default Navigator;
