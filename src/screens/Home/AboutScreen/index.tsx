import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../../../common/components/customHeader';
import {IMAGES} from '../../../common/constants/images';
import PageSkelton from '../../../common/components/pageSkelton';
import {goBack} from '../../../common/utils/navigatorUtils';

const AboutScreen = () => {
  return (
    <PageSkelton isSafeAreaView>
      <CustomHeader
        leftAccessories={IMAGES.BACK}
        titlle="About"
        leftAccessoriesPress={goBack}
      />
    </PageSkelton>
  );
};

export default AboutScreen;
