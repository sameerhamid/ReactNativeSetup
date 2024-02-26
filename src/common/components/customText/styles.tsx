import {StyleSheet, TextStyle} from 'react-native';
import {Colors} from '../../model/theme/themeModel';
import {scaleFontSize, scaleSize} from '../../utils/scaleSheetUtils';
import {isIOS} from '../../constants/platformInfro';

export type TextStyles = {
  black_Medium19: TextStyle;
  black_Regular16: TextStyle;
  black_Regular14: TextStyle;
  black_Regular15: TextStyle;
  black_Regular12: TextStyle;
  black_SemiBold14: TextStyle;
  black_Bold12: TextStyle;
  black_Bold14: TextStyle;
  black_Bold16: TextStyle;
  bold16: TextStyle;
  textInput: TextStyle;
  text_Align_center: TextStyle;
  white_Bold18: TextStyle;
  lightBlackInput_Regular16: TextStyle;
  orange_SemiBold16: TextStyle;
  lightBlackInput_Sans32: TextStyle;
  blue_SemiBold17: TextStyle;
  purple_Bold18: TextStyle;
  black_Medium14: TextStyle;
  black_Medium16: TextStyle;
  black_Medium20: TextStyle;
  black_SemiBold11: TextStyle;
  black_SemiBold17: TextStyle;
  purple_Medium17: TextStyle;
  purple_Medium19: TextStyle;
  purple_Regular17: TextStyle;
  black_Regular17: TextStyle;
  grey_Regular16: TextStyle;
  blue_Medium20: TextStyle;
  blue_Medium40: TextStyle;
  grey_Regular12: TextStyle;
  blue_Medium10: TextStyle;
  blue_SemiBold14: TextStyle;
  blue_Medium13: TextStyle;
  blue_Medium17: TextStyle;
  profileblue_Medium12: TextStyle;
  black_Medium13: TextStyle;
  grey_Regular13: TextStyle;
  purple_Medium12: TextStyle;
  black_Sans24: TextStyle;
  text_Regular11: TextStyle;
  text_Regular_13: TextStyle;
  text_Medium19: TextStyle;
  text_Regular12: TextStyle;
  lightBlackInput_Medium17: TextStyle;
  purple_Medium13: TextStyle;
  black_Sans23: TextStyle;
  ultraLightBlack_Regular12: TextStyle;
  black_Sans_14: TextStyle;
  black_Sans14: TextStyle;
  black_Sans15: TextStyle;
  black_Sans17: TextStyle;
  white_Sans12: TextStyle;
  white_Sans18: TextStyle;
  black_Medium16_AlignVertical_Top: TextStyle;
  purple_Regular14: TextStyle;
  purple_Regular14_flex: TextStyle;
  black_Regular14_flex: TextStyle;
  lightBlack_GeneralMedium_600: TextStyle;
  grey100_Medium12: TextStyle;
  black_Sans18: TextStyle;
  blue_SemiBold20: TextStyle;
  darkGrey_Regular14_center: TextStyle;
  purple_Medium16: TextStyle;
  black_SemiBold15: TextStyle;
  black_Regular14_marginTop4: TextStyle;
  text_Medium11: TextStyle;
  text_Medium_13: TextStyle;
  black_SemiBold18: TextStyle;
  black_SemiBold23: TextStyle;
  blue_Medium16: TextStyle;
  black_SemiProSemiBold18: TextStyle;
  black_Bold18: TextStyle;
  blue_SemiBold16: TextStyle;
  text_Bold13: TextStyle;
};
const textStyles = (colors?: Colors): TextStyles =>
  StyleSheet.create<TextStyles>({
    black_Medium19: {
      fontSize: scaleFontSize(19),
      color: colors?.text,
      // fontFamily: FontFamily.GeneralSansMedium,
      marginBottom: scaleSize(2),
      lineHeight: scaleSize(25),
    },
    black_Medium14: {
      // marginTop: scaleSize(12),
      color: colors?.text,
      fontSize: scaleFontSize(15),
      // fontFamily: FontFamily.GeneralSansMedium,
      lineHeight: scaleSize(20),
    },

    black_Regular16: {
      fontSize: scaleFontSize(16),
      color: colors?.text,
      // fontFamily: FontFamily.GeneralSansRegular,
      marginBottom: scaleSize(2),
    },

    black_Medium16: {
      fontSize: scaleFontSize(16),
      // fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.black100,
      lineHeight: scaleSize(22),
    },
    black_Medium13: {
      fontSize: scaleFontSize(13),
      // fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.black100,
    },
    black_Medium20: {
      fontSize: scaleFontSize(20),
      // fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.black100,
      // fontWeight: '500',
      lineHeight: scaleSize(22),
    },

    blue_Medium20: {
      fontSize: scaleFontSize(20),
      // fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.black100,
      lineHeight: scaleSize(22),
    },

    blue_Medium40: {
      fontSize: scaleFontSize(32),
      // fontFamily: FontFamily.GeneralSansMedium,
      // fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.black100,
      // fontWeight: '500',
      lineHeight: scaleSize(35),
    },

    black_Regular14: {
      fontSize: scaleFontSize(14),
      // fontFamily: FontFamily.GeneralSansRegular,
      color: colors?.text,
      marginBottom: scaleSize(2),
    },
    black_Regular15: {
      fontSize: scaleFontSize(15),
      // fontFamily: FontFamily.GeneralSansRegular,
      color: colors?.text,
    },

    black_Regular12: {
      fontSize: scaleFontSize(12),
      // fontFamily: FontFamily.GeneralSansRegular,
      color: colors?.text,
      marginBottom: scaleSize(2),
    },
    black_SemiBold14: {
      fontSize: scaleFontSize(14),
      color: colors?.text,
      // fontFamily: FontFamily.GeneralSansSemibold,
    },
    black_SemiBold15: {
      fontSize: scaleFontSize(15),
      color: colors?.text,
      // fontFamily: FontFamily.GeneralSansSemibold,
    },
    black_SemiBold17: {
      fontSize: scaleFontSize(17),
      color: colors?.text,
      // fontFamily: FontFamily.GeneralSansSemibold,
    },
    black_SemiBold11: {
      fontSize: scaleFontSize(11),
      color: colors?.text,
      // fontFamily: FontFamily.GeneralSansSemibold,
      textAlign: 'center',
    },
    black_Bold12: {
      fontSize: scaleFontSize(12),
      // fontFamily: FontFamily.GeneralSansBold,
      color: colors?.text,
    },
    black_Bold14: {
      fontSize: scaleFontSize(14),
      // fontFamily: FontFamily.GeneralSansBold,
      color: colors?.text,
      marginBottom: scaleSize(2),
    },
    black_Bold16: {
      fontSize: scaleFontSize(16),
      // fontFamily: FontFamily.GeneralSansBold,
      color: colors?.text,
    },

    black_Bold18: {
      fontSize: scaleFontSize(16),
      // fontFamily: FontFamily.GeneralSansBold,
      color: colors?.text,
    },

    bold16: {
      fontSize: scaleFontSize(16),
      color: colors?.text,
      // fontFamily: FontFamily.GeneralSansBold,
      marginBottom: scaleSize(2),
    },

    textInput: {
      fontSize: scaleFontSize(16),
      flex: 1,
      // fontFamily: FontFamily.GeneralSansSemibold,
      color: colors?.text,
      paddingVertical: 0,
    },

    text_Align_center: {
      textAlign: 'center',
    },

    white_Bold18: {
      fontSize: scaleFontSize(18),
      color: colors?.white100,
      // fontFamily: FontFamily.GeneralSansSemibold,
      marginBottom: scaleSize(2),
    },

    lightBlackInput_Regular16: {
      fontSize: scaleFontSize(16),
      // fontFamily: FontFamily.GeneralSansRegular,
      color: colors?.lightBlackInput,
      marginBottom: scaleFontSize(10),
    },

    orange_SemiBold16: {
      color: colors?.orangeTheme,
      fontSize: scaleFontSize(16),
      textDecorationColor: colors?.orangeTheme,
      textDecorationLine: 'underline',
      // fontFamily: FontFamily.GeneralSansSemibold,
    },

    lightBlackInput_Sans32: {
      textAlign: 'center',
      fontSize: scaleFontSize(32),
      // fontFamily: FontFamily.MyCoachSans,
      color: colors?.lightBlackInput,
    },

    blue_SemiBold17: {
      fontSize: scaleFontSize(17),
      color: colors?.blueText,
      // fontFamily: FontFamily.GeneralSansSemibold,
    },

    blue_SemiBold16: {
      fontSize: scaleFontSize(16),
      color: colors?.blueText,
      // fontFamily: FontFamily.GeneralSansSemibold,
    },

    blue_SemiBold20: {
      fontSize: scaleFontSize(20),
      color: colors?.blueText,
      // fontFamily: FontFamily.GeneralSansSemibold,
    },

    lightBlack_GeneralMedium_600: {
      fontSize: scaleFontSize(18),
      // fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.lightBlackInput,
      fontWeight: '600',
    },
    purple_Bold18: {
      fontSize: scaleFontSize(18),
      color: colors?.purpleButtonTheme,
      // fontFamily: FontFamily.GeneralSansSemibold,
      marginBottom: scaleSize(2),
    },

    purple_Medium17: {
      fontSize: scaleFontSize(17),
      color: colors?.purpleButtonTheme,
      // fontFamily: FontFamily.GeneralSansMedium,
    },
    purple_Medium19: {
      fontSize: scaleFontSize(19),
      color: colors?.purpleButtonTheme,
      // fontFamily: FontFamily.GeneralSansMedium,
    },

    purple_Regular17: {
      fontSize: scaleFontSize(17),
      color: colors?.purpleButtonTheme,
      // fontFamily: FontFamily.GeneralSansRegular,
    },

    purple_Medium12: {
      fontSize: scaleFontSize(12),
      color: colors?.purpleButtonTheme,
      // fontFamily: FontFamily.GeneralSansMedium,
      textDecorationLine: 'underline',
    },
    black_Regular17: {
      fontSize: scaleFontSize(17),
      color: colors?.text,
      // fontFamily: FontFamily.GeneralSansRegular,
    },

    grey_Regular16: {
      fontSize: scaleFontSize(16),
      color: colors?.darkGrey100,
      //   fontFamily: FontFamily.regular,
      lineHeight: scaleSize(20),
    },

    grey_Regular12: {
      fontSize: scaleFontSize(12),
      color: colors?.darkGrey100,
      // fontFamily: FontFamily.GeneralSansMedium,
      // lineHeight: scaleSize(20),
    },
    grey_Regular13: {
      fontSize: scaleFontSize(13),
      color: colors?.darkGrey100,
      // fontFamily: FontFamily.GeneralSansMedium,
      lineHeight: scaleSize(20),
    },

    blue_Medium10: {
      fontSize: scaleFontSize(10),
      // fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.black100,
      lineHeight: scaleSize(22),
    },

    blue_SemiBold14: {
      fontSize: scaleFontSize(14),
      //   fontFamily: FontFamily.GeneralSansSemibold,
      color: colors?.blueText,
      lineHeight: scaleSize(22),
    },

    blue_Medium16: {
      fontSize: scaleFontSize(16),
      //   fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.blueText,
      lineHeight: scaleSize(22),
    },

    blue_Medium13: {
      fontSize: scaleFontSize(13),
      //   fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.blueText,
      lineHeight: scaleSize(22),
    },

    blue_Medium17: {
      fontSize: scaleFontSize(17),
      //   fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.blueText,
      lineHeight: scaleSize(22),
    },

    profileblue_Medium12: {
      flex: 1,
      fontSize: scaleFontSize(12),
      //   fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.profileTextInputFields,
      paddingVertical: 0,
    },

    grey100_Medium12: {
      fontSize: scaleFontSize(12),
      //   fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.grey100,
    },
    black_Sans24: {
      fontSize: scaleFontSize(24),
      //   fontFamily: FontFamily.MyCoachSans,
      paddingTop: scaleSize(15),
      paddingLeft: scaleSize(15),
      color: colors?.black100,
    },
    text_Regular11: {
      paddingHorizontal: scaleSize(18),
      fontSize: scaleFontSize(11),
      //   fontFamily: FontFamily.GeneralSansRegular,
      paddingVertical: scaleSize(2),
      textAlign: 'center',
      color: colors?.text,
    },

    text_Regular_13: {
      fontSize: scaleSize(13),
      //   fontFamily: FontFamily.GeneralSansRegular,
      textAlign: 'center',
      paddingVertical: scaleSize(8),
      color: colors?.text,
    },

    text_Medium_13: {
      fontSize: scaleSize(13),
      //   fontFamily: FontFamily.GeneralSansMedium,
      textAlign: 'center',
      paddingVertical: scaleSize(10),
      color: colors?.blueText,
    },
    text_Medium19: {
      color: colors?.text,
      //   fontFamily: FontFamily.GeneralSansMedium,
      fontSize: scaleFontSize(19),
    },
    text_Medium11: {
      paddingHorizontal: scaleSize(18),
      fontSize: scaleFontSize(11),
      //   fontFamily: FontFamily.GeneralSansMedium,
      paddingVertical: scaleSize(2),
      textAlign: 'center',
      color: colors?.blueText,
    },
    text_Bold13: {
      paddingHorizontal: scaleSize(18),
      fontSize: scaleFontSize(13),
      //   fontFamily: FontFamily.GeneralSansBold,
      paddingVertical: scaleSize(2),
      textAlign: 'center',
      color: colors?.blueText,
    },
    text_Regular12: {
      color: colors?.text,
      //   fontFamily: FontFamily.GeneralSansRegular,
      fontSize: isIOS ? scaleFontSize(11) : scaleFontSize(12),
    },
    lightBlackInput_Medium17: {
      fontSize: scaleFontSize(17),
      //   fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.lightBlackInput,
    },
    purple_Medium13: {
      fontSize: scaleFontSize(13),
      //   fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.purpleButtonTheme,
    },
    black_Sans23: {
      color: colors?.lightBlackInput,
      //   fontFamily: FontFamily.MyCoachSans,
      fontSize: scaleFontSize(23),
    },
    black_Sans18: {
      color: colors?.lightBlackInput,
      //   fontFamily: FontFamily.MyCoachSans,
      fontSize: scaleFontSize(18),
    },
    ultraLightBlack_Regular12: {
      fontSize: scaleFontSize(12),
      //   fontFamily: FontFamily.GeneralSansRegular,
      color: colors?.ultraLightBlack,
    },
    black_Sans_14: {
      //   fontFamily: FontFamily.GeneralSansMedium,
      fontSize: scaleFontSize(14),
      color: colors?.black100,
    },
    black_Sans14: {
      //   fontFamily: FontFamily.MyCoachSans,
      fontSize: scaleFontSize(14),
      color: colors?.black100,
    },
    black_Sans17: {
      textAlign: 'center',
      //   fontFamily: FontFamily.MyCoachSans,
      fontSize: scaleFontSize(17),
      color: colors?.black100,
    },
    black_Sans15: {
      textAlign: 'center',
      //   fontFamily: FontFamily.MyCoachSans,
      fontSize: scaleFontSize(15),
      color: colors?.black100,
    },
    white_Sans12: {
      //   fontFamily: FontFamily.MyCoachSans,
      fontSize: scaleFontSize(12),
      color: colors?.white100,
    },
    white_Sans18: {
      //   fontFamily: FontFamily.MyCoachSans,
      fontSize: scaleFontSize(18),
      color: colors?.white100,
    },
    purple_Medium16: {
      fontSize: scaleFontSize(16),
      color: colors?.purpleText,
      //   fontFamily: FontFamily.GeneralSansMedium,
      marginLeft: scaleSize(10),
    },
    black_Regular14_marginTop4: {
      fontSize: scaleFontSize(14),
      //   fontFamily: FontFamily.GeneralSansRegular,
      color: colors?.text,
      textAlignVertical: 'center',
      marginBottom: 0,
      marginTop: scaleSize(4),
    },

    black_Medium16_AlignVertical_Top: {
      fontSize: scaleFontSize(16),
      //   fontFamily: FontFamily.GeneralSansMedium,
      color: colors?.black100,
      textAlignVertical: 'top',
      lineHeight: scaleFontSize(16),
    },
    purple_Regular14: {
      fontSize: scaleFontSize(14),
      color: colors?.purpleButtonTheme,
      //   fontFamily: FontFamily.GeneralSansRegular,
      lineHeight: scaleFontSize(18),
    },

    purple_Regular14_flex: {
      // flex: 0.45,
      fontSize: scaleFontSize(14),
      color: colors?.purpleButtonTheme,
      //   fontFamily: FontFamily.GeneralSansRegular,
      lineHeight: scaleFontSize(18),
    },
    black_Regular14_flex: {
      fontSize: scaleFontSize(14),
      //   fontFamily: FontFamily.GeneralSansRegular,
      color: colors?.text,
      // flex: 0.55,
      lineHeight: scaleFontSize(18),
    },
    darkGrey_Regular14_center: {
      textAlign: 'center',
      //   fontFamily: FontFamily.GeneralSansRegular,
      color: colors?.darkGrey100,
      fontSize: scaleFontSize(14),
    },
    black_SemiBold18: {
      fontSize: scaleFontSize(18),
      color: colors?.text,
      //   fontFamily: FontFamily.GeneralSansSemibold,
    },

    black_SemiBold23: {
      fontSize: scaleFontSize(23),
      color: colors?.text,
      //   fontFamily: FontFamily.GeneralSansSemibold,
    },

    black_SemiProSemiBold18: {
      fontSize: scaleFontSize(18),
      color: colors?.text,
      //   fontFamily: FontFamily.semiBold,
    },
  });
export default textStyles;
