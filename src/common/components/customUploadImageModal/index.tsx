import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React, {ReactElement} from 'react';
import stylesObj from './style';
import {useTheme} from '@react-navigation/native';
import {ThemeModelItem} from '../../model/theme/themeModel';
import {isIOS} from '../../constants/platformInfro';
import Spacer from '../utility/spacer';
import {scaleSize} from '../../utils/scaleSheetUtils';
import CustomHeader from '../customHeader';
import {IMAGES} from '../../constants/images';
import {RNCamera} from 'react-native-camera';
import {LocalizeKeys} from '../../constants/localizeKeys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showConsoler} from '../../constants/logUtils';
import RNFS from 'react-native-fs';
import {CameraRoll} from 'react-native';

interface Props {
  visibleState?: boolean;
  setVisibleState?: React.Dispatch<React.SetStateAction<boolean>>;
  cameraType?: typeof RNCamera.Constants.Type.back;
  setCameraType?: React.Dispatch<unknown>;
  getProfileImage?: () => void;
}

const CustomImageUploadModal = (props: Props) => {
  const theme: ThemeModelItem = useTheme();
  const styles = stylesObj(theme?.colors);
  const {
    visibleState,
    setVisibleState,
    cameraType,
    setCameraType,
    getProfileImage,
  } = props;

  const PendingView = (): ReactElement => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    );
  };

  const switchCamera = (): void => {
    if (cameraType === RNCamera.Constants.Type.front) {
      setCameraType!(RNCamera.Constants.Type.back);
    } else {
      setCameraType!(RNCamera.Constants.Type.front);
    }
  };

  const saveToGallery = async (imageUri: string) => {
    try {
      if (Platform.OS === 'android') {
        const destPath = `${RNFS.ExternalStorageDirectoryPath}/myImage.jpg`;
        await RNFS.copyFile(imageUri, destPath);
        // Notify the media scanner to add the image to the device's gallery
        CameraRoll.save(destPath, {type: 'photo'});
      } else {
        // For iOS, you can directly use CameraRoll to save the image
        await CameraRoll.save(imageUri, {type: 'photo'});
      }
      console.log('Image saved to gallery successfully');
    } catch (error) {
      console.error('Failed to save image to gallery:', error);
    }
  };

  const takePicture = async () => {
    console.log(`----calling take picture`);
    //@ts-ignore
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      //@ts-ignore
      const data = await this.camera.takePictureAsync(options);
      console.log(`data`, data.uri);

      if (data?.uri) {
        saveToGallery(data.uri);
        showConsoler('caling if block--------');
        await AsyncStorage.setItem('Profile', `${data.uri}`);

        getProfileImage!();
      }
    }
  };

  return (
    <Modal visible={visibleState} animationType="slide" style={styles.margin0}>
      <View style={styles.container}>
        <View style={styles.modalHeaderVw}>
          {isIOS && <Spacer height={scaleSize(45)} />}
          <CustomHeader
            rightAccessories={IMAGES.CLOSE}
            titlle="Upload"
            rightImg={styles.rightImg}
            rightAccessoriesPress={() => setVisibleState!(false)}
          />
          <Spacer height={scaleSize(10)} />
        </View>
        <RNCamera
          ref={ref => {
            //@ts-ignore
            this.camera = ref;
          }}
          captureAudio={false}
          type={cameraType}
          style={styles.preview}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: `${LocalizeKeys.CAMERA_PERMISSION}`,
            message: `${LocalizeKeys.CAMERA_PERMISSION_DESC}`,
            buttonPositive: `${LocalizeKeys.OK}`,
            buttonNegative: `${LocalizeKeys.CANCEL}`,
          }}>
          {/* @ts-ignore */}
          {({camera, status}) => {
            if (status !== 'READY') return PendingView();
            return (
              <View style={styles.footerVw}>
                <TouchableOpacity onPress={() => {}} style={styles.capture}>
                  <Image source={IMAGES.PHOT0_GALLERY} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    //@ts-ignore
                    takePicture(this);
                  }}
                  style={styles.capture}>
                  <Image
                    source={IMAGES.CAMERA_ICON}
                    style={{
                      resizeMode: 'contain',
                      height: scaleSize(60),
                      width: scaleSize(60),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    switchCamera();
                  }}
                  style={styles.capture}>
                  <Image source={IMAGES.CHANGE_VIEW} />
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </View>
    </Modal>
  );
};

export default CustomImageUploadModal;
