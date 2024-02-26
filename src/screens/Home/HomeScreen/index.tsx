import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import CustomHeader from '../../../common/components/customHeader';
import {IMAGES} from '../../../common/constants/images';

const HomeScreen = () => {
  const {colors} = useTheme();
  return (
    <View>
      <CustomHeader leftAccessories={IMAGES.BACK} titlle="Home" />
    </View>
  );
};

export default HomeScreen;
