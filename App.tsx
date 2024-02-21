import React, {useEffect, useRef, useState} from 'react';

import SplashScreen from 'react-native-splash-screen';

import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {IMAGES} from './src/assets/images';

function App(): React.JSX.Element {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const _carouselRef = useRef();

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const data = [
    {
      id: 1,
      title: 'Browse Product',
      image: IMAGES.ONE,
      descriptio:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: 2,
      title: 'Play Seemlessly',
      image: IMAGES.TWO,
      descriptio:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: 3,
      title: 'Track Order',
      image: IMAGES.THREE,
      descriptio:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];

  const _renderItem = ({item, index}: {item: {}; index: number}) => {
    return (
      <View>
        <Image
          source={
            //@ts-ignore
            item.image
          }
          style={{
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').width,
          }}
        />
        <View style={{padding: 15}}>
          <Text style={{fontSize: 18, fontWeight: '700'}}>
            {
              //@ts-ignore
              item.title
            }
          </Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            {
              //@ts-ignore
              item.descriptio
            }
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-betwceen'}}>
      <View style={{alignItems: 'flex-end', padding: 15}}>
        <TouchableOpacity>
          <Text style={{color: 'black'}}>Skip</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        ref={_carouselRef}
        data={data}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={index => setActiveDotIndex(index)}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Pagination
          dotsLength={3}
          activeDotIndex={activeDotIndex}
          carouselRef={_carouselRef}
          dotStyle={{
            width: 15,
            backgroundColor: 'teal',
          }}
          inactiveDotStyle={{
            width: 10,
          }}
        />
        <View style={{padding: 15, flexDirection: 'row', gap: 10}}>
          <TouchableWithoutFeedback
            onPress={() => {
              //@ts-ignore
              _carouselRef.current.snapToItem(activeDotIndex - 1);
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: 'lightgray',
              }}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              //@ts-ignore
              _carouselRef.current.snapToItem(activeDotIndex + 1);
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: 'teal',
              }}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
