import {Alert} from 'react-native';
import {AlertStyle} from '../constants/enums';
import Toast from 'react-native-simple-toast';

/**
 *
 * @param title --message title
 * @param description --alert description
 * @param leftButtonText --left button text
 * @param rightButtonText --right button text
 * @param onPressOK --onPress callback
 */
export const showAlert = (
  title: string,
  description: string,
  leftButtonText: string,
  rightButtonText: string,
  onPressOk: ((_value?: string | undefined) => void) | undefined,
): void => {
  Alert.alert(title, description, [
    {
      text: leftButtonText,
      onPress: onPressOk,
      style: AlertStyle.cancel,
    },
    {
      text: rightButtonText,
      onPress: () => {},
    },
  ]);
};

export const showOkAlert = (
  title: string,
  description: string,
  onPressOk: ((_value?: string | undefined) => void) | undefined,
): void => {
  Alert.alert(title, description, [
    {
      text: 'OK',
      onPress: onPressOk,
      style: AlertStyle.default,
    },
  ]);
};

/**
 *
 * @param message --what message to display
 * @param duration -- how long to
 * @param style --style to toast message
 */
export const showToast = (
  message?: string,
  duration?: number,
  style?: string[] | undefined,
): void => {
  if (message !== undefined) {
    //@ts-ignore
    Toast.show(message, duration, style);
  }
};
