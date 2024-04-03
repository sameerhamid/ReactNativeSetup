import {View, Text} from 'react-native';
import React from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import useLocationDetailsCotroller from './locationDetailsCotroller';
import stylesObj from './styles';

type LocationScreenTypeProp = RouteProp<ParamListBase, `HomeScreen`>;

interface Props {
  route: LocationScreenTypeProp;
}

const LocationDetailsScreen = (props: Props) => {
  const {route} = props;
  const routeParams = route.params;
  const {locationData, theme} = useLocationDetailsCotroller(routeParams);
  const styles = stylesObj(theme?.colors);
  return (
    <View>
      <Text>LocationDetailsScreen</Text>
    </View>
  );
};

export default LocationDetailsScreen;
