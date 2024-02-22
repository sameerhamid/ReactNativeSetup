import {Alert} from 'react-native';
import {AlertStyle} from '../constants/enums';

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
