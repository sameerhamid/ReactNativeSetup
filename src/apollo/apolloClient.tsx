import {
  ApolloClient,
  DefaultOptions,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import {SecretManager} from '../common/config/environment';
import {showConsoler} from '../common/constants/logUtils';
import Config from 'react-native-config';

export default async (): Promise<ApolloClient<NormalizedCacheObject> | null> => {
  const cache = new InMemoryCache();
  const defaultOptions: DefaultOptions | undefined = {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  };

  const client = new ApolloClient({
    uri: `${Config.POSTS_URL}`,
    cache,
    defaultOptions,
    connectToDevTools: true,
  });

  return client;
};
