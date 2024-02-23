import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {FONTS} from '../../../common/constants/fonts';
import {COLORS} from '../../../common/constants/colors';
import {IMAGES} from '../../../common/constants/images';
import {NavScreenTags} from '../../../common/constants/navScreenTags';
import {AppContext} from '../../../common/theme/AppContext';
import {useTheme} from '@react-navigation/native';
import {navigate} from '../../../common/utils/navigatorUtils';

const LoginScreen = () => {
  //@ts-ignore
  const {isDarkTheme, setIsDarkTheme} = useContext(AppContext);

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
          backgroundColor: COLORS.WHITE,
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
        placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
        cursorColor={COLORS.TEAL}
        selectionColor={COLORS.TEAL}
      />
      <TextInput
        style={{
          backgroundColor: COLORS.WHITE,
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
        placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
        cursorColor={COLORS.TEAL}
        selectionColor={COLORS.TEAL}
      />
    </>
  );

  console.log(socialMedia);

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
              borderColor: isDarkTheme ? COLORS.WHITE : COLORS.BLACK,
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

  return (
    <SafeAreaView style={{marginHorizontal: 30}}>
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
      <TouchableWithoutFeedback
        onPress={() => {
          navigate(NavScreenTags.BOTTOM_TAB_NAV);
        }}>
        <View
          style={{
            height: 50,
            backgroundColor: COLORS.TEAL,
            marginTop: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: FONTS.MONTSERRAT_BOLD,
              color: COLORS.WHITE,
              fontSize: 16,
            }}>
            Sign In
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <View
        style={{
          marginTop: 50,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{flex: 0.5, height: 2, backgroundColor: COLORS.GRAY_LIGHT}}
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
          style={{flex: 0.5, height: 2, backgroundColor: COLORS.GRAY_LIGHT}}
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
              color: 'teal',
            }}>
            Register now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
