import React, {useEffect, useRef, useState} from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import {DefaultTheme} from '@react-navigation/native';

import AppNavigation from './src/common/routes/appNavigation';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};
function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <AppNavigation />;
}

export default App;
