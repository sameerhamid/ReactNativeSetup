import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../../../screens/auth/LoginScreen';
import {NavScreenTags} from '../../constants/navScreenTags';

import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {IMAGES} from '../../constants/images';

import {useTheme} from '@react-navigation/native';
import HomeScreen from '../../../screens/Home/HomeScreen';
import WishlistScreen from '../../../screens/Home/WishlistScreen';
import OrderScreen from '../../../screens/Home/OrderScreen';
import ProfileScreen from '../../../screens/Home/ProfileScreen';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {navigate, navigateToAnotherStack} from '../../utils/navigatorUtils';
import AboutScreen from '../../../screens/Home/AboutScreen';
import Colors from '../../styles/colors';
import {scaleSize} from '../../utils/scaleSheetUtils';
import {signOutCustom} from '../../auth/emailAndPasswordAuth/signout';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Drawer navigation

const DrawerContainer = () => {
  // sign out method
  const signOut = async () => {
    try {
      await signOutCustom();
      // Continue with any post-sign-out logic if needed
      navigateToAnotherStack(
        NavScreenTags.AUTH_STACK,
        NavScreenTags.LOGIN_SCREEN,
      );
      await AsyncStorage.removeItem('userToken');
    } catch (error) {
      // Handle errors here
      console.error('Error during sign-out:', error);
    }
  };
  const {colors} = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName={NavScreenTags.PROFILE_TAB}
      drawerContent={props => {
        const {state} = props;
        const {routeNames, index} = state;
        const focused = routeNames[index];
        return (
          <DrawerContentScrollView
            {...props}
            //@ts-ignore
            style={{
              backgroundColor: colors.background,
              paddingTop: 22,
            }}>
            <Text style={{textAlign: 'center'}}>Code with sam</Text>

            <View
              style={{
                justifyContent: 'space-between',
                height: Dimensions.get('screen').height - scaleSize(200),
              }}>
              <View>
                <DrawerItem
                  label={'Profile'}
                  onPress={() => navigate(NavScreenTags.PROFILE_TAB)}
                  focused={focused === NavScreenTags.PROFILE_TAB}
                  activeBackgroundColor={Colors.danger100}
                  inactiveBackgroundColor={Colors.grey100}
                  activeTintColor={Colors.text}
                  inactiveTintColor={Colors.text}
                />

                <DrawerItem
                  label={'About Us'}
                  onPress={() => navigate(NavScreenTags.ABOUT_DRAWER)}
                  focused={focused === NavScreenTags.ABOUT_DRAWER}
                  activeBackgroundColor={Colors.danger100}
                  inactiveBackgroundColor={Colors.grey100}
                  activeTintColor={Colors.text}
                  inactiveTintColor={Colors.text}
                />
              </View>
              <TouchableOpacity
                onPress={() => signOut()}
                style={{
                  marginHorizontal: scaleSize(20),
                  backgroundColor: Colors.danger100,
                  paddingVertical: scaleSize(10),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: scaleSize(8),
                }}>
                <Text style={{color: Colors.white100, fontSize: 18}}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen
        name={NavScreenTags.PROFILE_TAB}
        component={ProfileScreen}
      />

      <Drawer.Screen
        name={NavScreenTags.ABOUT_DRAWER}
        component={AboutScreen}
      />
    </Drawer.Navigator>
  );
};

// Tabs navigation

const TabContainer = (): React.ReactElement => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        // @ts-ignore
        showLabel: true,
        headerShown: false,
        tabBarStyle: {backgroundColor: Colors.background},
      }}>
      <Tab.Screen
        name={NavScreenTags.HOME_TAB}
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.HOME}
              style={{
                height: scaleSize(26),
                width: scaleSize(26),
                objectFit: 'contain',
                tintColor: focused
                  ? //@ts-ignore
                    Colors.danger100
                  : //@ts-ignore
                    Colors.grey200,
              }}
            />
          ),
          //@ts-ignore
          tabBarActiveTintColor: Colors.black100,
          //@ts-ignore
          tabBarInactiveTintColor: Colors.grey200,
        }}
      />

      <Tab.Screen
        name={NavScreenTags.WHISHLIST_TAB}
        component={WishlistScreen}
        options={{
          title: 'Wishlist',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.WISHLIST}
              style={{
                height: scaleSize(26),
                width: scaleSize(26),
                objectFit: 'contain',
                tintColor: focused
                  ? //@ts-ignore
                    Colors.danger100
                  : //@ts-ignore
                    Colors.grey200,
              }}
            />
          ),
          //@ts-ignore
          tabBarActiveTintColor: Colors.black100,
          //@ts-ignore
          tabBarInactiveTintColor: Colors.grey200,
        }}
      />

      <Tab.Screen
        name={NavScreenTags.ORDERS_TAB}
        component={OrderScreen}
        options={{
          title: 'Orders',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.ORDER}
              style={{
                height: scaleSize(26),
                width: scaleSize(26),
                objectFit: 'contain',
                tintColor: focused
                  ? //@ts-ignore
                    Colors.danger100
                  : //@ts-ignore
                    Colors.grey200,
              }}
            />
          ),
          //@ts-ignore
          tabBarActiveTintColor: Colors.black100,
          //@ts-ignore
          tabBarInactiveTintColor: Colors.grey200,
        }}
      />

      <Tab.Screen
        name={NavScreenTags.DRAWER_NAV}
        component={DrawerContainer}
        options={{
          title: 'Profile',

          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.USER}
              style={{
                height: scaleSize(26),
                width: scaleSize(26),

                objectFit: 'contain',
                tintColor: focused
                  ? //@ts-ignore
                    Colors.danger100
                  : //@ts-ignore
                    Colors.grey200,
              }}
            />
          ),
          //@ts-ignore
          tabBarActiveTintColor: Colors.black100,
          //@ts-ignore
          tabBarInactiveTintColor: Colors.grey200,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabContainer;
