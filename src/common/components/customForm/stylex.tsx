import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';

const styles = StyleSheet.create({
  textInp: {
    backgroundColor: COLORS.WHITE,
    height: 50,
    maxHeight: 50,
    minHeight: 50,
    fontSize: 16,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontFamily: FONTS.MONTSERRAT,
  },
});

export default styles;
