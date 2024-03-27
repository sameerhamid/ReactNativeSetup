import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import CustomHeader from '../../../common/components/customHeader';
import {IMAGES} from '../../../common/constants/images';
import PageSkelton from '../../../common/components/pageSkelton';
import {ApollPostsProvider} from '../../../common/apolloProvider/apolloPostsProvider';
import {useApolloClient} from '@apollo/client';
import getPosts from '../../../apollo/queries/getPosts';
import {showConsoler} from '../../../common/constants/logUtils';

const HomeScreen = () => {
  const {colors} = useTheme();
  const [data, setData] = useState();
  const [visible, setVisible] = useState(true);
  const client = useApolloClient();

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

  useEffect(() => {
    ApollPostsProvider.apolloPostsInstance.listPosts(
      client,
      getPosts,
      res => {
        showConsoler(`response>>>>${JSON.stringify(res)}`);
      },
      () => {},
    );
  }, []);

  return (
    <PageSkelton isSafeAreaView>
      <CustomHeader titlle="Home" />
    </PageSkelton>
  );
};

export default HomeScreen;
