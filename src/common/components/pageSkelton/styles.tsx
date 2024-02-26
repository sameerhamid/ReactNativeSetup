import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../model/theme/themeModel';
import {scaleSize} from '../../utils/scaleSheetUtils';

type Styles = {
  safeAreaView: ViewStyle;
  pageVw: ViewStyle;
};

const styles = (colors?: Colors, isPaddingFromBottom?: boolean): Styles =>
  StyleSheet.create<Styles>({
    safeAreaView: {
      flex: 1,
      backgroundColor: colors?.slateBackground,
      paddingBottom: isPaddingFromBottom ? scaleSize(10) : 0,
    },
    pageVw: {
      flex: 1,
    },
  });

export default styles;
