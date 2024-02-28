import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native';

import {FONTS} from '../../../common/constants/fonts';

import {TouchableWithoutFeedback} from 'react-native';
import {View} from 'react-native';

import {goBack, navigate} from '../../../common/utils/navigatorUtils';
import CustomForm from '../../../common/components/customForm';
import {scaleFontSize, scaleSize} from '../../../common/utils/scaleSheetUtils';
import Colors from '../../../common/styles/colors';
import {useTheme} from '@react-navigation/native';
import PageSkelton from '../../../common/components/pageSkelton';
import {TextInput} from 'react-native-gesture-handler';
import {createUserWithEmailAndPasswordCustom} from '../../../common/auth/emailAndPasswordAuth';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NavScreenTags} from '../../../common/constants/navScreenTags';

const SignupScreen = () => {
  const {colors} = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPasswor, setConfirmPassword] = useState('');
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

  const registerUser = async (
    email: string,
    passsword: string,
    confirmPass: string,
  ) => {
    if (passsword === confirmPass) {
      try {
        const user: FirebaseAuthTypes.User =
          await createUserWithEmailAndPasswordCustom(email, passsword);
        // Do something with the user object if needed
        if (user !== undefined || user !== null) {
          navigate(NavScreenTags.BOTTOM_TAB_NAV);
        }
      } catch (error) {
        // Handle errors here
        console.error('Error creating user:', error);
      }
    } else {
      Alert.alert("Passord doesn't match");
    }
  };

  const renderText = () => (
    <View style={{marginBottom: scaleSize(30)}}>
      <Text
        style={{
          marginTop: scaleSize(40),
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
          fontSize: scaleFontSize(20),
          marginTop: scaleSize(20),
          marginHorizontal: scaleSize(20),
          color: colors.text,
        }}>
        Welcome to the simplified version of React Native
      </Text>
    </View>
  );

  const renderForm = () => (
    //@ts-ignore
    <>
      <TextInput
        style={{
          backgroundColor: Colors.cyan,
          height: 50,
          maxHeight: 50,
          minHeight: 50,
          fontSize: 16,
          borderRadius: 10,
          paddingHorizontal: 20,
          marginTop: 50,
          fontFamily: FONTS.MONTSERRAT,
        }}
        placeholder="Email"
        placeholderTextColor={Colors.black100}
        cursorColor={Colors.danger100}
        selectionColor={Colors.danger100}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        style={{
          backgroundColor: Colors.cyan,
          height: 50,
          maxHeight: 50,
          minHeight: 50,
          fontSize: 16,
          borderRadius: 10,
          paddingHorizontal: 20,
          marginTop: 20,
          fontFamily: FONTS.MONTSERRAT,
        }}
        placeholder="Password"
        placeholderTextColor={Colors.black100}
        cursorColor={Colors.danger100}
        selectionColor={Colors.danger100}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        style={{
          backgroundColor: Colors.cyan,
          height: 50,
          maxHeight: 50,
          minHeight: 50,
          fontSize: 16,
          borderRadius: 10,
          paddingHorizontal: 20,
          marginTop: 20,
          fontFamily: FONTS.MONTSERRAT,
        }}
        placeholder="Password"
        placeholderTextColor={Colors.black100}
        cursorColor={Colors.danger100}
        selectionColor={Colors.danger100}
        onChangeText={text => setConfirmPassword(text)}
      />
    </>
  );
  return (
    <PageSkelton isSafeAreaView isPaddingFromBottom>
      {renderText()}

      {renderForm()}
      <TouchableOpacity
        onPress={() => registerUser(email, password, confirmPasswor)}>
        <View
          style={{
            height: 50,
            backgroundColor: Colors.danger100,
            marginTop: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: FONTS.MONTSERRAT_BOLD,
              color: Colors.text,
              fontSize: 16,
            }}>
            Sign Up
          </Text>
        </View>
      </TouchableOpacity>
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
    </PageSkelton>
  );
};

export default SignupScreen;
