import {useTheme} from '@react-navigation/native';
import {GestureResponderEvent, Text, TextStyle} from 'react-native';
import {ThemeModelItem} from '../../model/theme/themeModel';
import textStyles from './styles';
import React from 'react';

interface Props {
  text?: string;
  txtStyle?: TextStyle;
  txtSize?: number;
  numberOfLines?: number;
  onTextPress?: ((_event: GestureResponderEvent) => void) | undefined;
}

const defaultProps: Props = {
  text: '',
  txtStyle: {},
  txtSize: undefined,
  numberOfLines: undefined,
  onTextPress: undefined,
};

const CustomText = (props: typeof defaultProps): React.ReactElement | null => {
  const theme: ThemeModelItem = useTheme();
  const styles = textStyles(theme?.colors);
  const {text, txtStyle, txtSize, numberOfLines, onTextPress} = props;
  if (text) {
    return (
      <Text
        onPress={onTextPress}
        numberOfLines={numberOfLines ?? 0}
        style={[
          styles.bold16,
          txtStyle ?? {},
          txtSize ? {fontSize: txtSize} : {},
        ]}>
        {text ?? ''}
      </Text>
    );
  }

  return null;
};

export default CustomText;
