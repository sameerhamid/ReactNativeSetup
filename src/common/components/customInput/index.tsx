import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {CustomInputModelItem} from './customInputModle';

const CustomInput = (props: CustomInputModelItem) => {
  const [showPasswordEye, setShowPasswordEye] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <View>
      <Text>CustomInput</Text>
    </View>
  );
};

export default CustomInput;
