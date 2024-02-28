import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import CustomHeader from '../../../common/components/customHeader';
import {IMAGES} from '../../../common/constants/images';
import PageSkelton from '../../../common/components/pageSkelton';
import {goBack, navigate} from '../../../common/utils/navigatorUtils';
import {Text, TouchableOpacity, View} from 'react-native';
import CustomText from '../../../common/components/customText';
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

  const signOut = async () => {
    try {
      await signOutCustom();
      // Continue with any post-sign-out logic if needed
      navigate(NavScreenTags.LOGIN_SCREEN);
    } catch (error) {
      // Handle errors here
      console.error('Error during sign-out:', error);
    }
  };

  return (
    <PageSkelton isSafeAreaView>
      <CustomHeader
        leftAccessories={IMAGES.BACK}
        titlle="Home"
        leftAccessoriesPress={goBack}
      />

      <TouchableOpacity onPress={() => signOut()}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </PageSkelton>
  );
};

export default HomeScreen;
