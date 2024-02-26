import React, {useEffect, useRef, useState} from 'react';
import 'react-native-gesture-handler';

import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {IMAGES} from '../../common/constants/images';
import Icon from 'react-native-vector-icons/Ionicons';
import {FONTS} from '../../common/constants/fonts/index';

import {NavScreenTags} from '../../common/constants/navScreenTags';
import {navigateToAnotherStack} from '../../common/utils/navigatorUtils';
import Colors from '../../common/styles/colors';
import {scaleSize} from '../../common/utils/scaleSheetUtils';
interface Props {}

const IntroScreen = (props: Props) => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const _carouselRef = useRef();
  const data = [
    {
      id: 1,
      title: 'What is Quranly?',
      image: IMAGES.ONE,
      descriptio:
        'Quranly is a habit building app, designed specificially to help you to start reading the Quran everyday and connect with the words of Allah!',
    },
    {
      id: 2,
      title: 'Verses to pages',
      image: IMAGES.TWO,
      descriptio: 'We help you to build a habit so you read more over time',
    },
    {
      id: 3,
      title: 'Reward',
      image: IMAGES.THREE,
      descriptio:
        'Know the reward for each letter based on the Hadith of the Prophet ❤️',
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
        <View style={{paddingHorizontal: 26, gap: 18}}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONTS.MONTSERRAT_BOLD,
              textAlign: 'center',
            }}>
            {
              //@ts-ignore
              item.title
            }
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONTS.MONTSERRAT,
              textAlign: 'center',
            }}>
            {
              //@ts-ignore
              item.descriptio
            }
          </Text>
        </View>
      </View>
    );
  };

  const renderSkipButton = (): React.ReactElement => (
    <View style={{alignItems: 'flex-end', padding: 15}}>
      <TouchableOpacity
        onPress={() => {
          navigateToAnotherStack(
            NavScreenTags.AUTH_STACK,
            NavScreenTags.LOGIN_SCREEN,
          );
        }}>
        <Text style={{color: 'black'}}>Skip</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeading = (): React.ReactElement => (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: FONTS.MONTSERRAT_BOLD,
          fontSize: 26,
        }}>
        QURANLY
      </Text>
    </View>
  );

  const renderPagination = (): React.ReactElement => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Pagination
        dotsLength={3}
        activeDotIndex={activeDotIndex}
        //@ts-ignore
        carouselRef={_carouselRef}
        dotStyle={{
          width: 15,
          backgroundColor: Colors.danger100,
        }}
        inactiveDotStyle={{
          width: 10,
        }}
      />
      <View style={{padding: 15, flexDirection: 'row', gap: 10}}>
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            _carouselRef.current.snapToItem(activeDotIndex - 1);
          }}>
          <View
            style={{
              width: scaleSize(80),
              height: scaleSize(80),
              borderRadius: scaleSize(40),
              backgroundColor: Colors.grey100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Icon name="arrow-back" size={26} color="#000" /> */}
            <Image source={IMAGES.BACK} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (activeDotIndex === data.length - 1) {
              navigateToAnotherStack(
                NavScreenTags.AUTH_STACK,
                NavScreenTags.LOGIN_SCREEN,
              );
            } else {
              //@ts-ignore
              _carouselRef.current.snapToItem(activeDotIndex + 1);
            }
          }}>
          <View
            style={{
              width: scaleSize(80),
              height: scaleSize(80),
              borderRadius: scaleSize(40),
              backgroundColor: Colors.danger100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Icon name="arrow-forward" size={26} color="#000" /> */}
            <Image source={IMAGES.FORWARD} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, justifyContent: 'space-betwceen'}}>
      {renderSkipButton()}
      {renderHeading()}
      <Carousel
        //@ts-ignore
        ref={_carouselRef}
        data={data}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={index => setActiveDotIndex(index)}
      />
      {renderPagination()}
    </View>
  );
};

export default IntroScreen;
