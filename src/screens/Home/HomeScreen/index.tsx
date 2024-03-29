import React, {useEffect, useState} from 'react';

import CustomHeader from '../../../common/components/customHeader';

import PageSkelton from '../../../common/components/pageSkelton';

import useHomeScreenController from './homeScreenController';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import stylesObj from './styles';
import CustomText from '../../../common/components/customText';

const HomeScreen = () => {
  const {
    loaderVisible,
    setLoaderVisible,
    locations,
    setLocations,
    onCardPress,
  } = useHomeScreenController();

  const theme = useTheme();
  const styles = stylesObj(theme?.colors);

  console.log(`Locations >>>> ${JSON.stringify(locations)}`);

  // useEffect(() => {
  //   setVisible(true);
  //   fetch('https://muslimsalat.com/srinagar.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data);
  //       setVisible(false);
  //     });
  // }, []);

  //@ts-ignore
  // const item = data?.items?.[0];
  // const prayerTiming = [];

  // if (item !== undefined || item !== null) {
  //   for (let index in item) {
  //     prayerTiming.push({
  //       name: index,
  //       time: item[index],
  //     });
  //   }
  // }

  // console.log(prayerTiming);

  const renderLocations = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.cardsContainer}
        onPress={() => onCardPress(item)}>
        <View style={styles.card}>
          <Image source={{uri: item?.photo}} style={styles.cardImage} />
          <Text style={styles.cardText}>{item?.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <PageSkelton isSafeAreaView visible={loaderVisible}>
      <CustomHeader titlle="Home" />

      <CustomText text={`Locations`} txtSize={22} />
      <FlatList
        horizontal
        renderItem={renderLocations}
        //@ts-ignore
        data={locations}
        showsHorizontalScrollIndicator={false}
      />
    </PageSkelton>
  );
};

export default HomeScreen;
