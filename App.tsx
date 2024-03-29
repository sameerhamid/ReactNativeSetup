import React, {useEffect, useMemo, useRef, useState} from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import AppNavigation from './src/common/routes/appNavigation';

import {
  navigate,
  navigationRef,
  replace,
} from './src/common/utils/navigatorUtils';
import {NavScreenTags} from './src/common/constants/navScreenTags';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApolloProvider, useApolloClient} from '@apollo/client';
import {Text, View} from 'react-native';
import ApolloClient from './src/apollo/apolloClient';
import {showConsoler} from './src/common/constants/logUtils';
import Config from 'react-native-config';
import {SecretManager} from './src/common/config/environment';
import {ApollPostsProvider} from './src/common/apolloProvider/apolloPostsProvider';
import HomeScreen from './src/screens/Home/HomeScreen';
function App(): React.JSX.Element {
  const [client, setClient] = useState();

  const setupApollo = async (): Promise<void> => {
    const newClient = await ApolloClient();
    //@ts-ignore
    setClient(newClient);
  };

  useEffect(() => {
    if (!client) {
      setupApollo();
    }
  }, [client]);

  if (!client) {
    return (
      <View>
        <Text>Not client setup</Text>
      </View>
    );
  }

  return (
    <ApolloProvider client={client}>
      <AppNavigation />
    </ApolloProvider>
  );
}

export default App;
