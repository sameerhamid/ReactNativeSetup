import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts';
import Colors from '../../styles/colors';
import {scaleFontSize, scaleSize} from '../../utils/scaleSheetUtils';

const styles = StyleSheet.create({
  textInp: {
    backgroundColor: Colors.cyan,
    height: scaleSize(50),
    maxHeight: scaleSize(80),
    minHeight: scaleSize(80),
    fontSize: scaleFontSize(16),
    borderRadius: scaleSize(12),
    paddingHorizontal: scaleSize(22),
    fontFamily: FONTS.MONTSERRAT,
  },
});

export default styles;
