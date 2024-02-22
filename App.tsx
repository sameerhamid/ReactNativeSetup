import React, {useEffect, useMemo, useRef, useState} from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import AppNavigation from './src/common/routes/appNavigation';
import {AppContext} from './src/common/theme/AppContext';
import DarkTheme from './src/common/theme/darkTheme';
import LightTheme from './src/common/theme/LightTheme';

function App(): React.JSX.Element {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const appContext = useMemo(() => {
    return {isDarkTheme, setIsDarkTheme};
  }, [isDarkTheme, setIsDarkTheme]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AppContext.Provider value={appContext}>
      <AppNavigation />
    </AppContext.Provider>
  );
}

export default App;
