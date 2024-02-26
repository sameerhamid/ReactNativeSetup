import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../../../common/components/customHeader';
import {IMAGES} from '../../../common/constants/images';

const OrderScreen = () => {
  return (
    <View>
      <CustomHeader leftAccessories={IMAGES.BACK} titlle="Order" />
    </View>
  );
};

export default OrderScreen;
