import {Platform} from 'react-native';

const FONTS = {
  ...Platform.select({
    ios: {
      MONTSERRAT: 'Montserrat-Regular',
      MONTSERRAT_BOLD: 'Montserrat-Bold',
    },
    android: {
      MONTSERRAT: 'MontserratRegular',
      MONTSERRAT_BOLD: 'Montserrat-Bold',
    },
  }),
};

export default FONTS;
