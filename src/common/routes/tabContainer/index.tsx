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
import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createBottomTabNavigator();

// Drawer navigation

const DrawerContainer = () => {
  return (
    <Drawer.Navigator
      initialRouteName={NavScreenTags.PROFILE_TAB}
      drawerContent={() => (
        <View style={{marginTop: 30}}>
          <Text>sameer</Text>
        </View>
      )}>
      <Drawer.Screen
        name={NavScreenTags.PROFILE_TAB}
        component={ProfileScreen}
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
