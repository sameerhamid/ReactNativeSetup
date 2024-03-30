import React, {
  ReactComponentElement,
  ReactElement,
  useEffect,
  useState,
} from 'react';

import CustomHeader from '../../../common/components/customHeader';

import PageSkelton from '../../../common/components/pageSkelton';

import useHomeScreenController from './homeScreenController';
import {
  FlatList,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import stylesObj from './styles';
import CustomText from '../../../common/components/customText';
import {scaleFontSize, scaleSize} from '../../../common/utils/scaleSheetUtils';
import CustomImageUploadModal from '../../../common/components/customUploadImageModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IMAGES} from '../../../common/constants/images';

const HomeScreen = () => {
  const {
    loaderVisible,
    setLoaderVisible,
    locations,
    setLocations,
    onCardPress,
    isCamerVisible,
    cameraType,
    setIsCameraVisible,
    setCameraType,
  } = useHomeScreenController();
  const [profileImageUrl, setProfileImageUrl] = useState('');
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

  const getProfileImage = async () => {
    console.log(`AsyncStorgae Data>>> ${JSON.stringify(AsyncStorage)}`);

    const profileImageUrl = await AsyncStorage.getItem('Profile');
    console.log(`profile image url ${profileImageUrl}`);

    setProfileImageUrl(profileImageUrl ?? '');
  };

  useEffect(() => {
    getProfileImage();
  }, []);

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

  const renderImageUploaderModal = (): ReactElement => (
    <CustomImageUploadModal
      visibleState={isCamerVisible}
      setVisibleState={setIsCameraVisible}
      cameraType={cameraType}
      setCameraType={setCameraType}
    />
  );

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

      {profileImageUrl !== '' && (
        <Image
          source={{
            uri: `${profileImageUrl ?? ''}`,
          }}
          style={{width: scaleSize(200), height: scaleSize(200)}}
        />
      )}

      <TouchableOpacity
        style={styles.openCameraBtn}
        onPress={() => {
          setIsCameraVisible(true);
        }}>
        <Text style={{fontSize: scaleFontSize(22)}}>Open Camera</Text>
      </TouchableOpacity>

      {renderImageUploaderModal()}
    </PageSkelton>
  );
};

export default HomeScreen;
