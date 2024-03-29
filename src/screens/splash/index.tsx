import {View, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavScreenTags} from '../../common/constants/navScreenTags';
import {replace} from '../../common/utils/navigatorUtils';

import styles from './styles';
import {useTheme} from '@react-navigation/native';
import Colors from '../../common/styles/colors';

import AnimatedLottieView from 'lottie-react-native';
import {showConsoler} from '../../common/constants/logUtils';

const Splash = () => {
  const [splashState, setSplashState] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    });
  }, []);

  const checkUserToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    const userData = await AsyncStorage.getItem('userData');
    showConsoler(`AsyncStorageData>>>${JSON.stringify(userData)}`);
    // If a user token exists, navigate to the home screen
    if (userToken) {
      // Use the navigation method to go to the home screen
      // This depends on your navigation setup (e.g., Stack.Navigator)
      replace(NavScreenTags.BOTTOM_TAB_NAV);
    } else {
      replace(NavScreenTags.AUTH_STACK);
    }
  };
  return (
    <AnimatedLottieView
      style={styles.lottieVw}
      source={require('./INFINITYAnimation.json')}
      autoPlay
      loop={false}
      onAnimationFinish={() => {
        checkUserToken();
      }}
    />
  );
};

export default Splash;
