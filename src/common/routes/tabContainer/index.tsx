import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../../../screens/auth/LoginScreen';
import {NavScreenTags} from '../../constants/navScreenTags';

import {Image, Text, View} from 'react-native';
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
import {navigate} from '../../utils/navigatorUtils';
import AboutScreen from '../../../screens/Home/AboutScreen';
import {COLORS} from '../../constants/colors';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Drawer navigation

const DrawerContainer = () => {
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
            style={{backgroundColor: colors.tabbarBackground, paddingTop: 22}}>
            <Text style={{textAlign: 'center'}}>Code with sam</Text>

            <DrawerItem
              label={'Profile'}
              onPress={() => navigate(NavScreenTags.PROFILE_TAB)}
              focused={focused === NavScreenTags.PROFILE_TAB}
              activeBackgroundColor={COLORS.TEAL}
              inactiveBackgroundColor={COLORS.GRAY_LIGHT}
              activeTintColor={COLORS.WHITE}
              inactiveTintColor={COLORS.BLACK}
            />

            <DrawerItem
              label={'About Us'}
              onPress={() => navigate(NavScreenTags.ABOUT_DRAWER)}
              focused={focused === NavScreenTags.ABOUT_DRAWER}
              activeBackgroundColor={COLORS.TEAL}
              inactiveBackgroundColor={COLORS.GRAY_LIGHT}
              activeTintColor={COLORS.WHITE}
              inactiveTintColor={COLORS.BLACK}
            />
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
        tabBarStyle: {backgroundColor: colors.background},
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
                height: 25,
                width: 25,
                objectFit: 'contain',
                tintColor: focused
                  ? //@ts-ignore
                    colors.tabbarActiveColor
                  : //@ts-ignore
                    colors.tabbarInActiveColor,
              }}
            />
          ),
          //@ts-ignore
          tabBarActiveTintColor: colors.tabbarActiveColor,
          //@ts-ignore
          tabBarInactiveTintColor: colors.tabbarInActiveColor,
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
                height: 25,
                width: 25,
                objectFit: 'contain',
                tintColor: focused
                  ? //@ts-ignore
                    colors.tabbarActiveColor
                  : //@ts-ignore
                    colors.tabbarInActiveColor,
              }}
            />
          ),
          //@ts-ignore
          tabBarActiveTintColor: colors.tabbarActiveColor,
          //@ts-ignore
          tabBarInactiveTintColor: colors.tabbarInActiveColor,
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
                height: 25,
                width: 25,
                objectFit: 'contain',
                tintColor: focused
                  ? //@ts-ignore
                    colors.tabbarActiveColor
                  : //@ts-ignore
                    colors.tabbarInActiveColor,
              }}
            />
          ),
          //@ts-ignore
          tabBarActiveTintColor: colors.tabbarActiveColor,
          //@ts-ignore
          tabBarInactiveTintColor: colors.tabbarInActiveColor,
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
                height: 25,
                width: 25,
                objectFit: 'contain',
                tintColor: focused
                  ? //@ts-ignore
                    colors.tabbarActiveColor
                  : //@ts-ignore
                    colors.tabbarInActiveColor,
              }}
            />
          ),
          //@ts-ignore
          tabBarActiveTintColor: colors.tabbarActiveColor,
          //@ts-ignore
          tabBarInactiveTintColor: colors.tabbarInActiveColor,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabContainer;
