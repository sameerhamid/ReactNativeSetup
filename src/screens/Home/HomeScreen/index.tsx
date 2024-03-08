import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import CustomHeader from '../../../common/components/customHeader';
import {IMAGES} from '../../../common/constants/images';
import PageSkelton from '../../../common/components/pageSkelton';
import {
  goBack,
  navigate,
  navigateToAnotherStack,
} from '../../../common/utils/navigatorUtils';
import {Text, TouchableOpacity, View} from 'react-native';
import Spacer from '../../../common/components/utility/spacer';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';
import {signOutCustom} from '../../../common/auth/emailAndPasswordAuth/signout';
import {NavScreenTags} from '../../../common/constants/navScreenTags';

const HomeScreen = () => {
  const {colors} = useTheme();
  const [data, setData] = useState();
  const [visible, setVisible] = useState(true);

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

  return (
    <PageSkelton isSafeAreaView>
      <CustomHeader titlle="Home" />
    </PageSkelton>
  );
};

export default HomeScreen;
