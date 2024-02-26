import {PixelRatio} from 'react-native';
import {screenHeight, screenWidth} from '../constants/dimensions';
import {isIOS, isTablet} from '../constants/platformInfro';

const baseWidth = isTablet ? 662 : 375;

const baseHeight = isTablet ? 970 : 667;

/**
 * adjust scalesize
 * @param size
 * @returns
 */

export const scaleSize = (size: number): number => {
  const scaleWidth = (screenWidth / baseHeight) * size;
  return scaleWidth < 1 ? scaleWidth : Math.round(scaleWidth);
};

/**
 * get screen width
 * @param size
 * @returns
 */

export const scaleSizeWith = (size: number): number => {
  return Math.round(screenWidth / baseWidth) * size;
};

/**
 * get screen height
 * @param size
 * @returns
 */
export const scaleSizeHeight = (size: number): number =>
  Math.round((screenHeight / baseHeight) * size);

/**
 * adjust the size of the fonts
 * @param size
 * @returns
 */

export const scaleFontSize = (size: number) => {
  const scale = screenWidth / baseWidth;
  const newSize = size * scale;
  if (isIOS) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
