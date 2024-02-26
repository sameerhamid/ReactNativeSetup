import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../../../common/components/customHeader';
import {IMAGES} from '../../../common/constants/images';
import PageSkelton from '../../../common/components/pageSkelton';
import {goBack} from '../../../common/utils/navigatorUtils';

const OrderScreen = () => {
  return (
    <PageSkelton isSafeAreaView>
      <CustomHeader
        leftAccessories={IMAGES.BACK}
        titlle="Orders"
        leftAccessoriesPress={goBack}
      />
    </PageSkelton>
  );
};

export default OrderScreen;
