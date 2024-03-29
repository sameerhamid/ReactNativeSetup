import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {ApollPostsProvider} from '../../../common/apolloProvider/apolloPostsProvider';
import {useApolloClient} from '@apollo/client';
import getPosts from '../../../apollo/queries/getPosts';
import {showConsoler} from '../../../common/constants/logUtils';

interface HomeScreenControllerTypes {
  locations: [] | undefined;
  setLocations: Dispatch<SetStateAction<[] | undefined>>;
  loaderVisible: boolean;
  setLoaderVisible: Dispatch<SetStateAction<boolean>>;
  onCardPress: (_item: {}) => void;
}

const useHomeScreenController = (): HomeScreenControllerTypes => {
  const client = useApolloClient();
  const [loaderVisible, setLoaderVisible] = useState<boolean>(true);
  const [locations, setLocations] = useState<[] | undefined>([]);

  const getPost = () => {
    ApollPostsProvider.apolloPostsInstance.listPosts(
      client,
      getPosts,
      response => {
        setLoaderVisible(true);
        //@ts-ignore
        setLocations(response?.data?.locations);
        showConsoler(`data>>>${JSON.stringify(response.data)}`);
        setLoaderVisible(false);
      },
      () => {
        setLoaderVisible(false);
      },
    );
  };

  const onCardPress = (item: {}): void => {
    showConsoler(`onCardPress>>> ${JSON.stringify(item)}`);
  };

  useEffect(() => {
    getPost();
  }, []);
  return {
    loaderVisible,
    setLoaderVisible,
    locations,
    setLocations,
    onCardPress,
  };
};

export default useHomeScreenController;
