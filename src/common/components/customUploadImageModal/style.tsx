import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../model/theme/themeModel';
import {scaleSize} from '../../utils/scaleSheetUtils';

type Styles = {
  margin0: ViewStyle;
  container: ViewStyle;
  modalHeaderVw: ViewStyle;
  rightImg: ImageStyle;
  preview: ViewStyle;
  footerVw: ViewStyle;
  capture: ViewStyle;
};

const styles = (colors?: Colors): Styles =>
  StyleSheet.create<Styles>({
    margin0: {
      margin: 0,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors?.slateBackground,
    },

    modalHeaderVw: {
      backgroundColor: colors?.slateBackground,
      paddingHorizontal: scaleSize(5),
    },
    rightImg: {
      height: scaleSize(12),
      width: scaleSize(12),
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    footerVw: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors?.slateBackground,
      width: '100%',
      paddingHorizontal: scaleSize(20),
    },
    capture: {
      flex: 0,
      backgroundColor: 'transparent',
      alignSelf: 'center',
      margin: 20,
    },
  });

export default styles;
