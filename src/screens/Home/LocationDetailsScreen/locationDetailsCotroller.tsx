import {RefObject, useRef} from 'react';
import {Location} from '../../../common/model/Location/locations';
import {ThemeModelItem} from '../../../common/model/theme/themeModel';
import {useTheme} from '@react-navigation/native';

interface LocationDetailsSereenTypes {
  theme: ThemeModelItem;
  locationData: RefObject<Location | undefined>;
}
const useLocationDetailsCotroller = (
  //@ts-ignore
  routeParams,
): LocationDetailsSereenTypes => {
  const locationData = useRef<Location | undefined>(routeParams?.loctionData);
  const theme = useTheme();
  return {
    theme,
    locationData,
  };
};

export default useLocationDetailsCotroller;
