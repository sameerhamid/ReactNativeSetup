import {ImageStyle, StyleSheet} from 'react-native';
import {Colors} from '../../model/theme/themeModel';
import {scaleSize, scaleSizeWidth} from '../../utils/scaleSheetUtils';

export type ImageStyles = {
  icon_13: ImageStyle;
  icon_20: ImageStyle;
  icon_25: ImageStyle;
  icon_35: ImageStyle;
  profile_50: ImageStyle;
  input_Image: ImageStyle;
  date_icon_Image: ImageStyle;
  dropdown_Tick: ImageStyle;
  margin: ImageStyle;
  image_Picker: ImageStyle;
  add_Image_Button: ImageStyle;
  picker_Image: ImageStyle;
  flagPicker_20: ImageStyle;
  iconModal_50: ImageStyle;
  icon_18: ImageStyle;
  ht100_wd100_cover: ImageStyle;
  ht100_wd100_contain: ImageStyle;
  profile_Pic_small: ImageStyle;
  ht100_wd100_Cover_BrTop20: ImageStyle;
  ht100_wd100_Cover_Br8: ImageStyle;
  ht100_wd100_Cover_Br10: ImageStyle;
  ht100_wd100_cover_Br12: ImageStyle;
  icon_22: ImageStyle;
  icon_60: ImageStyle;
};
export const imageStyles = (
  colors?: Colors,
  borderRadius?: number,
): ImageStyles =>
  StyleSheet.create<ImageStyles>({
    icon_13: {
      width: scaleSize(13),
      height: scaleSize(13),
    },
    icon_20: {
      width: scaleSize(20),
      height: scaleSize(20),
    },
    icon_22: {
      width: scaleSize(22),
      height: scaleSize(22),
    },
    icon_25: {
      width: scaleSize(25),
      height: scaleSize(25),
    },
    icon_35: {
      width: scaleSize(35),
      height: scaleSize(35),
    },
    icon_18: {
      height: scaleSize(18),
      width: scaleSize(18),
    },
    icon_60: {
      resizeMode: 'contain',
      height: scaleSize(60),
      width: scaleSize(60),
    },
    profile_50: {
      width: scaleSize(50),
      borderRadius: scaleSize(50),
      height: scaleSize(50),
    },
    input_Image: {
      width: scaleSize(18),
      height: scaleSize(18),
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: colors?.text,
    },
    date_icon_Image: {
      width: scaleSize(16),
      height: scaleSize(16),
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: colors?.text,
    },
    dropdown_Tick: {
      width: scaleSize(15),
      height: scaleSize(15),
      tintColor: colors?.black20,
    },
    margin: {marginHorizontal: scaleSize(10)},
    image_Picker: {
      width: '100%',
      height: scaleSize(150),
    },
    add_Image_Button: {
      width: scaleSize(20),
      height: scaleSize(20),
      marginRight: scaleSize(10),
      resizeMode: 'contain',
      tintColor: colors?.black20,
    },
    picker_Image: {
      height: scaleSize(30),
      width: scaleSize(30),
      resizeMode: 'contain',
      tintColor: colors?.black20,
    },
    flagPicker_20: {
      marginRight: scaleSizeWidth(4),
      width: scaleSize(20),
      borderRadius: scaleSize(20),
      height: undefined,
      aspectRatio: 1,
    },
    iconModal_50: {
      width: scaleSize(50),
      height: scaleSize(50),
      marginVertical: scaleSize(10),
    },
    ht100_wd100_cover: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    ht100_wd100_contain: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
    },
    profile_Pic_small: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
      borderTopLeftRadius: scaleSize(8),
      borderTopRightRadius: scaleSize(8),
    },
    ht100_wd100_Cover_BrTop20: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
      borderTopLeftRadius: scaleSize(20),
      borderTopRightRadius: scaleSize(20),
    },
    ht100_wd100_Cover_Br8: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
      borderTopLeftRadius: scaleSize(8),
      borderBottomLeftRadius: scaleSize(8),
    },
    ht100_wd100_Cover_Br10: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
      borderRadius: scaleSize(10),
    },
    ht100_wd100_cover_Br12: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
      borderRadius: borderRadius || scaleSize(12),
    },
  });
