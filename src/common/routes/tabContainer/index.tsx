import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../../../screens/auth/LoginScreen';
import {NavScreenTags} from '../../constants/navScreenTags';
import HomeScreen from '../../../screens/tabScreens/HomeScreen';
import {Image} from 'react-native';
import {IMAGES} from '../../constants/images';
import WishlistScreen from '../../../screens/tabScreens/WishlistScreen';
import OrderScreen from '../../../screens/tabScreens/OrderScreen';
import ProfileScreen from '../../../screens/tabScreens/ProfileScreen';
import {COLORS} from '../../constants/colors';
import {useTheme} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
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
        name={NavScreenTags.PROFILE_TAB}
        component={ProfileScreen}
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
