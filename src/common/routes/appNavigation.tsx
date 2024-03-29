import React, {useContext, useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IntroScreen from '../../screens/introScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import {NavScreenTags} from '../constants/navScreenTags';
import {navigate, navigationRef} from '../utils/navigatorUtils';
import {AppContext} from '../themes/AppContext';
import {DarkTheme} from '../themes/darkTheme';
import {LightTheme} from '../themes/lightTheme';
import SignupScreen from '../../screens/auth/signupScreen';
import TabContainer from './tabContainer';
import Splash from '../../screens/splash';

const Stack = createStackNavigator();
const AuthStack = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name={NavScreenTags.LOGIN_SCREEN}
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={NavScreenTags.SING_UP_SCREEN}
      component={SignupScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const RooStack = (): React.ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName={NavScreenTags.SPLASH_SCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NavScreenTags.SPLASH_SCREEN} component={Splash} />
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

      <Stack.Screen
        name={NavScreenTags.BOTTOM_TAB_NAV}
        component={TabContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const appContext = useMemo(() => {
    return {isDarkTheme, setIsDarkTheme};
  }, [isDarkTheme, setIsDarkTheme]);

  return (
    <NavigationContainer
      ref={navigationRef}
      //@ts-ignore
      theme={isDarkTheme ? DarkTheme : LightTheme}>
      <AppContext.Provider value={appContext}>
        <RooStack />
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default AppNavigation;
