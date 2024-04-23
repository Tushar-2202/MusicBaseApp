import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from 'src/router/Routes';
import SignUp from 'src/screens/UnAuthenticated/SignUp';
// Screens Name

const Stack = createStackNavigator();
const Navigator = () => (
  <Stack.Navigator
    initialRouteName={Routes.Login}
    screenOptions={({navigation}) => ({
      headerTitleAlign: 'center',
    })}>
    <Stack.Screen
      name={Routes.SignUp}
      component={SignUp}
    />
  </Stack.Navigator>
);
export default Navigator;
