import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native';

import {FONTS} from '../../../common/constants/fonts';

import {TouchableWithoutFeedback} from 'react-native';
import {View} from 'react-native';

import {goBack} from '../../../common/utils/navigatorUtils';
import CustomForm from '../../../common/components/customForm';
import {scaleFontSize, scaleSize} from '../../../common/utils/scaleSheetUtils';
import Colors from '../../../common/styles/colors';
import {useTheme} from '@react-navigation/native';

const SignupScreen = () => {
  const {colors} = useTheme();
  const formData = [
    {
      id: 1,
      fieldName: 'name',
      isRequired: false,
      minLength: 4,
      maxLength: 8,
      placeholder: 'Enter Name',
      placeholderTextColor: '',
      cursorColor: '',
      selectionColor: '',
    },
    {
      id: 2,
      fieldName: 'email',
      isRequired: false,
      minLength: 4,
      maxLength: 8,
      placeholder: 'Enter Email',
      placeholderTextColor: '',
      cursorColor: '',
      selectionColor: '',
    },
    {
      id: 3,
      fieldName: 'mobile',
      isRequired: false,
      minLength: 4,
      maxLength: 8,
      placeholder: '',
      placeholderTextColor: '',
      cursorColor: '',
      selectionColor: '',
    },
    {
      id: 4,
      fieldName: 'password',
      isRequired: false,
      minLength: 4,
      maxLength: 8,
      placeholder: 'Enter password',
      placeholderTextColor: '',
      cursorColor: '',
      selectionColor: '',
    },
    {
      id: 5,
      fieldName: 'confirm password',
      isRequired: false,
      minLength: 4,
      maxLength: 8,
      placeholder: '',
      placeholderTextColor: '',
      cursorColor: '',
      selectionColor: '',
    },
  ];
  const renderText = () => (
    <View style={{marginBottom: scaleSize(30)}}>
      <Text
        style={{
          marginTop: scaleSize(60),
          textAlign: 'center',
          fontFamily: FONTS.MONTSERRAT_BOLD,
          fontSize: scaleFontSize(28),
          color: colors.text,
        }}>
        Hello!
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: FONTS.MONTSERRAT,
          fontSize: scaleFontSize(22),
          marginTop: scaleSize(22),
          marginHorizontal: scaleSize(30),
          color: colors.text,
        }}>
        Welcome to the simplified version of React Native
      </Text>
    </View>
  );

  const renderForm = () => (
    //@ts-ignore
    <CustomForm formFieldsData={formData} />
  );
  return (
    <SafeAreaView style={{marginHorizontal: 30}}>
      {renderText()}

      {renderForm()}
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
        <Text style={{fontFamily: FONTS.MONTSERRAT, color: colors.text}}>
          Already a member?
        </Text>
        <TouchableWithoutFeedback onPress={() => goBack()}>
          <Text
            style={{
              marginStart: 5,
              fontFamily: FONTS.MONTSERRAT_BOLD,
              color: Colors.danger100,
            }}>
            Sign In
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
