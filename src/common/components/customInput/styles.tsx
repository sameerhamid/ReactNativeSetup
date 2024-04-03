import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../model/theme/themeModel';
import {scaleSize} from '../../utils/scaleSheetUtils';

type Styles = {
  bottomBtn: ViewStyle;
};

const styles = (colors?: Colors): Styles =>
  StyleSheet.create<Styles>({
    bottomBtn: {
      marginTop: scaleSize(25),
    },
  });

export default styles;
