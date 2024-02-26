import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import CustomHeader from '../../../common/components/customHeader';
import {IMAGES} from '../../../common/constants/images';
import PageSkelton from '../../../common/components/pageSkelton';
import {goBack} from '../../../common/utils/navigatorUtils';
import {Text, View} from 'react-native';
import CustomText from '../../../common/components/customText';
import Spacer from '../../../common/components/utility/spacer';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';

const HomeScreen = () => {
  const {colors} = useTheme();
  const [data, setData] = useState();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    fetch('https://muslimsalat.com/srinagar.json')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setVisible(false);
      });
  }, []);

  //@ts-ignore
  const item = data?.items?.[0];
  const prayerTiming = [];

  if (item !== undefined || item !== null) {
    for (let index in item) {
      prayerTiming.push({
        name: index,
        time: item[index],
      });
    }
  }

  console.log(prayerTiming);

  return (
    <PageSkelton isSafeAreaView visible={visible}>
      <CustomHeader
        leftAccessories={IMAGES.BACK}
        titlle="Home"
        leftAccessoriesPress={goBack}
      />
      {prayerTiming.length &&
        prayerTiming?.map((item, index) => (
          <View key={index}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <CustomText text={item?.name} />
              </View>

              <View>
                <CustomText text={item?.time} />
              </View>
            </View>
            <Spacer height={scaleSize(20)} />
          </View>
        ))}
    </PageSkelton>
  );
};

export default HomeScreen;
