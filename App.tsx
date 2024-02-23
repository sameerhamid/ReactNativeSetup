import React, {useEffect, useMemo, useRef, useState} from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import AppNavigation from './src/common/routes/appNavigation';
import {AppContext} from './src/common/theme/AppContext';
import DarkTheme from './src/common/theme/darkTheme';
import LightTheme from './src/common/theme/lightTheme';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <AppNavigation />;
}

export default App;
