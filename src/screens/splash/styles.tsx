import {StyleSheet, ViewStyle} from 'react-native';

type Styles = {
  container: ViewStyle;
  lottieVw: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  lottieVw: {
    width: '100%',
  },
});
export default styles;
