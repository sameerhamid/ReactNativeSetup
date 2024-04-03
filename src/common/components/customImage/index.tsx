import {Image, ImageSourcePropType, ImageStyle, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

import {imageStyles} from './imageStyles';
import {ImageSourceType} from '../../constants/enums';

interface Props {
  source?: ImageSourcePropType | string;
  tintColor?: string;
  imageStyle?: ImageStyle;
  sourceType?: ImageSourceType;
}

const defaultProps: Props = {
  source: undefined,
  tintColor: undefined,
  imageStyle: undefined,
  sourceType: undefined,
};
/**
 * image component with custom styling to display images
 * @param props
 * @returns
 */
const CustomImage = (props: typeof defaultProps): React.ReactElement => {
  const {source, tintColor, imageStyle, sourceType} = props;
  const theme = useTheme();
  const imageStyled = imageStyles(theme.colors); // instance of common image style to implement styling
  return source ? (
    <Image
      resizeMode="contain"
      style={{
        ...imageStyled.icon_22, // default style object
        ...(imageStyle ?? {}), // overrides the default style of the image
        ...{tintColor: tintColor ?? ''}, // to add a tint color, can be passed through props
      }}
      //@ts-ignore
      source={sourceType === ImageSourceType.URL ? {uri: `${source}`} : source} // source will display image based on if it contains a url or is a locally stored image
    />
  ) : (
    <View />
  );
};

export default CustomImage;
