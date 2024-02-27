/**
 * Replcement of the console.log function
 * @param message --whatever message you want to print
 */

import {Alert} from 'react-native';

export const showConsoler = (message: string): void => {
  if (__DEV__) {
    console.log(message);
  }
};

/**
 * utility to show testing console and alert, which needs to eb disabled in prod env
 */

export const showMessage = <T,>(
  title: string,
  isAlert: boolean,
  ...params: T[]
): void => {
  if (__DEV__) {
    if (isAlert) {
      Alert.alert(title, JSON.stringify(params));
    } else {
      console.log(`${title} >> `, params);
    }
  }
};
