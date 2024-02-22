import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IntroScreen from '../../screens/introScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import {NavScreenTags} from '../constants/navScreenTags';
import {navigationRef} from '../utils/navigatorUtils';
import {AppContext} from '../theme/AppContext';

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

const AppNavigation = ({
  //@ts-ignore
  theme,
}) => {
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <RooStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
