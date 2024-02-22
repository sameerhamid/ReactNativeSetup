import {View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';

interface Props {
  itemWidth?: number;
  sliderWidth?: number;
  carouselRef?: React.MutableRefObject<null>;
  _renderItem?: ({_item}: {_item: {}}) => React.ReactElement;
  data?: {};
  onSnapToItem?: (index: number) => void;
}

const defaultProps: Props = {
  itemWidth: undefined,
  sliderWidth: undefined,
  carouselRef: undefined,
  _renderItem: undefined,
  data: undefined,
  onSnapToItem: undefined,
};

const CustomCarousal = (props: typeof defaultProps) => {
  const {itemWidth, sliderWidth, carouselRef, _renderItem, data, onSnapToItem} =
    props;
  return (
    <View>
      <Carousel
        ref={carouselRef}
        //@ts-ignore
        data={data}
        //@ts-ignore
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={onSnapToItem}
      />
    </View>
  );
};

export default CustomCarousal;
