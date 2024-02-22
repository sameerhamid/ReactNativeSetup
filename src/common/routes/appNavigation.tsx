import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IntroScreen from '../../screens/introScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import {NavScreenTags} from '../constants/navScreenTags';
import {navigationRef} from '../utils/navigatorUtils';

const Stack = createStackNavigator();

const AuthStack = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name={NavScreenTags.LOGIN_SCREEN}
      component={LoginScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const RooStack = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name={NavScreenTags.INTRO_SCREEN}
      component={IntroScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={NavScreenTags.AUTH_STACK}
      component={AuthStack}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RooStack />
    </NavigationContainer>
  );
};

export default AppNavigation;