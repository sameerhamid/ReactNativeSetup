import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../../common/model/theme/themeModel';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';

type Styles = {
  cardsContainer: ViewStyle;
  card: ViewStyle;
  cardImage: ImageStyle;
  cardText: TextStyle;
  openCameraBtn: ViewStyle;
};

const styles = (colors?: Colors): Styles =>
  StyleSheet.create<Styles>({
    cardsContainer: {
      marginTop: scaleSize(20),
      justifyContent: 'space-between',
      marginRight: scaleSize(16),
      borderTopEndRadius: scaleSize(10),
    },
    card: {
      width: scaleSize(164),
      height: scaleSize(200),
      gap: 10,
    },
    cardImage: {
      width: '100%',
      height: '80%',
      resizeMode: 'cover',
      borderTopLeftRadius: scaleSize(10),
      borderTopRightRadius: scaleSize(10),
    },
    cardText: {
      fontSize: scaleSize(16),
      color: colors?.black100,
    },
    openCameraBtn: {
      width: scaleSize(344),
      borderRadius: scaleSize(10),
      height: scaleSize(60),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'teal',
      marginBottom: scaleSize(22),
    },
  });

export default styles;
