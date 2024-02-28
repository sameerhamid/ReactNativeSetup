import React, {useEffect, useMemo, useRef, useState} from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import AppNavigation from './src/common/routes/appNavigation';

import {navigate} from './src/common/utils/navigatorUtils';
import {NavScreenTags} from './src/common/constants/navScreenTags';
import AsyncStorage from '@react-native-async-storage/async-storage';
function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  useEffect(() => {
    const checkUserToken = async () => {
      const userToken = await AsyncStorage.getItem('userToken');

      // If a user token exists, navigate to the home screen
      if (userToken) {
        // Use the navigation method to go to the home screen
        // This depends on your navigation setup (e.g., Stack.Navigator)
        navigate(NavScreenTags.BOTTOM_TAB_NAV);
      }
    };

    checkUserToken();
  });
  return <AppNavigation />;
}

export default App;
