import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts';
import Colors from '../../styles/colors';
import {scaleFontSize, scaleSize} from '../../utils/scaleSheetUtils';

const styles = StyleSheet.create({
  textInp: {
    backgroundColor: Colors.cyan,
    height: scaleSize(50),
    maxHeight: scaleSize(50),
    minHeight: scaleSize(50),
    fontSize: scaleFontSize(16),
    borderRadius: scaleSize(12),
    paddingHorizontal: scaleSize(16),
    fontFamily: FONTS.MONTSERRAT,
  },
});

export default styles;
