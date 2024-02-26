import React, {useEffect, useMemo, useRef, useState} from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import AppNavigation from './src/common/routes/appNavigation';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <AppNavigation />;
}

export default App;
