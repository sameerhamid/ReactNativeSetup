import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Image,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {FONTS} from '../../../common/constants/fonts';

import {IMAGES} from '../../../common/constants/images';
import {NavScreenTags} from '../../../common/constants/navScreenTags';
import {AppContext} from '../../../common/themes/AppContext';
import {useTheme} from '@react-navigation/native';
import {navigate} from '../../../common/utils/navigatorUtils';
import Colors from '../../../common/styles/colors';
import PageSkelton from '../../../common/components/pageSkelton';
import {
  createUserWithEmailAndPasswordCustom,
  signInWithEmailAndPassCustom,
} from '../../../common/auth/emailAndPasswordAuth';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

const LoginScreen = () => {
  //@ts-ignore
  const {isDarkTheme, setIsDarkTheme} = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [passsword, setPassword] = useState('');

  const socialMedia = [
    {id: 0, image: IMAGES.APPLE},
    {id: 1, image: IMAGES.GOOGLE},
    {id: 2, image: IMAGES.FACEBOOK},
  ];

  console.log(isDarkTheme);

  const {colors} = useTheme();

  const renderSwitch = (): React.ReactElement => (
    <View>
      <Switch
        value={isDarkTheme}
        onChange={() => {
          setIsDarkTheme(
            //@ts-ignore
            prev => !prev,
          );
        }}
      />
    </View>
  );

  const renderText = (): React.ReactElement => {
    return (
      <View style={{marginTop: 70, alignItems: 'center', gap: 10}}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: FONTS.MONTSERRAT_BOLD,
            fontSize: 24,
            color: colors.text,
          }}>
          Hello Again!
        </Text>
        <Text
          style={{
            fontFamily: FONTS.MONTSERRAT,
            fontSize: 20,
            textAlign: 'center',
            marginHorizontal: 70,
            color: colors.text,
          }}>
          Welcome back you've been missed!
        </Text>
      </View>
    );
  };

  const renderInput = (): React.ReactElement => (
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
    </>
  );

  const renderSocials = (): React.ReactElement => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 50,
      }}>
      {socialMedia.map((item, index) => {
        return (
          <TouchableOpacity
            key={item.id}
            style={{
              height: 60,
              width: 70,
              borderWidth: 3,
              borderRadius: 10,
              borderColor: isDarkTheme ? Colors.danger100 : Colors.black100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={item.image}
              style={{
                height: 34,
                width: 40,
                objectFit: 'contain',
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );

  const login = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassCustom(email, password);
      console.log(user);

      if (user != undefined || user != null) {
        navigate(NavScreenTags.BOTTOM_TAB_NAV);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PageSkelton isSafeAreaView isPaddingFromBottom>
      {renderSwitch()}

      {renderText()}

      {renderInput()}
      <Text
        style={{
          fontFamily: FONTS.MONTSERRAT,
          textAlign: 'right',
          marginTop: 20,
          color: colors.text,
        }}>
        Forgot Password?
      </Text>
      <TouchableOpacity onPress={() => login(email, passsword)}>
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
            Sign In
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 50,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{flex: 0.5, height: 2, backgroundColor: Colors.danger100}}
        />
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontFamily: FONTS.MONTSERRAT,
            color: colors.text,
          }}>
          Or continue with
        </Text>
        <View
          style={{flex: 0.5, height: 2, backgroundColor: Colors.danger100}}
        />
      </View>
      {renderSocials()}
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{fontFamily: FONTS.MONTSERRAT, color: colors.text}}>
          Not a member?
        </Text>
        <TouchableOpacity
          onPress={() => navigate(NavScreenTags.SING_UP_SCREEN)}>
          <Text
            style={{
              marginStart: 5,
              fontFamily: FONTS.MONTSERRAT_BOLD,
              color: Colors.danger100,
            }}>
            Register now
          </Text>
        </TouchableOpacity>
      </View>
    </PageSkelton>
  );
};

export default LoginScreen;
