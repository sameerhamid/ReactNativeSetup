import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import {COLORS} from '../../../common/constants/colors';
import {FONTS} from '../../../common/constants/fonts';
import {TextInput} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import {View} from 'react-native';

import {Alert} from 'react-native';
import {goBack} from '../../../common/utils/navigatorUtils';
import CustomForm from '../../../common/components/customForm';

const SignupScreen = () => {
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
    <View>
      <Text
        style={{
          marginTop: 60,
          textAlign: 'center',
          fontFamily: FONTS.MONTSERRAT_BOLD,
          fontSize: 24,
        }}>
        Hello!
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: FONTS.MONTSERRAT,
          fontSize: 20,
          marginTop: 20,
          marginHorizontal: 30,
        }}>
        Welcome to the simplified version of React Native
      </Text>
    </View>
  );

  const renderForm = () => <CustomForm formFieldsData={formData} />;
  return (
    <SafeAreaView style={{marginHorizontal: 30}}>
      {renderText()}

      {renderForm()}
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
        <Text style={{fontFamily: FONTS.MONTSERRAT}}>Already a member?</Text>
        <TouchableWithoutFeedback onPress={() => goBack()}>
          <Text
            style={{
              marginStart: 5,
              fontFamily: FONTS.MONTSERRAT_BOLD,
              color: 'teal',
            }}>
            Sign In
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
