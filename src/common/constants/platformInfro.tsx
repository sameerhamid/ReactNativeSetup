import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

// check whether the device is android

export const isAndroid = Platform.OS === 'android';

// check whether the device is Ios

export const isIOS = Platform.OS === 'ios';

// check whether the device is Tablet

export const isTablet = DeviceInfo.isTablet();

// check whether the device has notch

export const hasNotch = DeviceInfo.hasNotch();

// Get the device unique identifier

export const UID = DeviceInfo.getUniqueId();

// get the android version to select the permisson to gallery

export const AndroidVersion = DeviceInfo.getSystemVersion();
