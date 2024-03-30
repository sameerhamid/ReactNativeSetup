import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {ApollPostsProvider} from '../../../common/apolloProvider/apolloPostsProvider';
import {useApolloClient} from '@apollo/client';
import getPosts from '../../../apollo/queries/getPosts';
import {showConsoler} from '../../../common/constants/logUtils';
import {Location} from '../../../common/model/Location/locations';
import {navigate} from '../../../common/utils/navigatorUtils';
import {NavScreenTags} from '../../../common/constants/navScreenTags';
import {RNCamera} from 'react-native-camera';

interface HomeScreenControllerTypes {
  locations: Location | undefined;
  setLocations: Dispatch<SetStateAction<Location | undefined>>;
  loaderVisible: boolean;
  setLoaderVisible: Dispatch<SetStateAction<boolean>>;
  onCardPress: (_item: {}) => void;
  setIsCameraVisible: Dispatch<SetStateAction<boolean>>;
  isCamerVisible: boolean;
  setCameraType: Dispatch<unknown>;
  cameraType: unknown;
}

const useHomeScreenController = (): HomeScreenControllerTypes => {
  const client = useApolloClient();
  const [loaderVisible, setLoaderVisible] = useState<boolean>(true);
  const [locations, setLocations] = useState<Location | undefined>();
  const [isCamerVisible, setIsCameraVisible] = useState<boolean>(false);
  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);

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
    isCamerVisible,
    setIsCameraVisible,
    cameraType,
    setCameraType,
  };
};

export default useHomeScreenController;
