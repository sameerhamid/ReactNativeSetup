import {
  FlexAlignType,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ThemeModelItem} from '../../model/theme/themeModel';
import {useTheme} from '@react-navigation/native';
import {isIOS} from '../../constants/platformInfro';
import {scaleSize} from '../../utils/scaleSheetUtils';
import stylesObj from './styles';
import React from 'react';
import Spacer from '../utility/spacer';

interface Props {
  titlle?: string;
  leftAccessories?: ImageSourcePropType;
  leftAccessoriesPress?: ((_event: GestureResponderEvent) => void) | undefined;
  rightAccessories?: ImageSourcePropType;
  rightAccessoriesPress?: ((_event: GestureResponderEvent) => void) | undefined;
  leftImg?: StyleProp<ImageStyle>;
  rightImg?: StyleProp<ImageStyle>;
  titleTxt?: StyleProp<TextStyle>;
  showSpaceFromTop?: boolean;
  containerStyle?: ViewStyle;
  headerTextAlignment?: FlexAlignType | undefined;
  marginHorizontal?: number;
}

const defaultProps: Props = {
  titlle: '',
  leftAccessories: undefined,
  leftAccessoriesPress: undefined,
  rightAccessories: undefined,
  rightAccessoriesPress: undefined,
  leftImg: undefined,
  rightImg: undefined,
  titleTxt: undefined,
  showSpaceFromTop: true,
  headerTextAlignment: undefined,
  marginHorizontal: undefined,
};

const CustomHeader = (props: typeof defaultProps): React.ReactElement => {
  const theme: ThemeModelItem = useTheme();

  const {
    titlle,
    leftAccessories,
    leftAccessoriesPress,
    rightAccessories,
    rightAccessoriesPress,
    leftImg,
    rightImg,
    titleTxt,
    showSpaceFromTop,
    headerTextAlignment,
    marginHorizontal,
  } = props;

  const styles = stylesObj(
    theme?.colors,
    headerTextAlignment,
    marginHorizontal,
  );

  //   left accessories view

  const leftContainer = (): React.ReactNode => {
    if (leftAccessories || rightAccessories) {
      return (
        <View style={styles.leftContainer}>
          {leftAccessories ? (
            <TouchableOpacity
              style={styles.leftImg}
              onPress={leftAccessoriesPress}>
              <Image
                source={leftAccessories}
                style={[styles.leftImg, leftImg]}
              />
            </TouchableOpacity>
          ) : undefined}
        </View>
      );
    }
    return null;
  };

  //   middle title view

  const middleVw = (): React.ReactNode => {
    return (
      <View style={styles.middleContainer}>
        <Text style={[styles.titleTxt, titleTxt]}>{titlle ?? ''}</Text>
      </View>
    );
  };

  const rightContainer = (): React.ReactNode => {
    if (leftAccessories || rightAccessories) {
      return (
        <View style={styles.rightContainer}>
          {rightAccessories ? (
            <TouchableOpacity
              style={styles.rightImgVw}
              onPress={rightAccessoriesPress}>
              <Image
                source={rightAccessories}
                style={[styles.rightImg, rightImg]}
              />
            </TouchableOpacity>
          ) : undefined}
        </View>
      );
    }

    return null;
  };

  return (
    <>
      {!isIOS && (showSpaceFromTop || defaultProps.showSpaceFromTop) && (
        <Spacer height={scaleSize(15)} />
      )}

      {isIOS && (showSpaceFromTop || defaultProps.showSpaceFromTop) && (
        <Spacer height={scaleSize(50)} />
      )}
      <View style={[styles.container, props?.containerStyle || {}]}>
        {/* left side container */}
        {leftContainer()}
        {/* middle container containing title text */}
        {middleVw()}
        {/* Right side container */}
        {rightContainer()}
      </View>
    </>
  );
};

export default CustomHeader;
