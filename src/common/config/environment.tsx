import Config from 'react-native-config';
import {ConfigModel} from './ConfigModel';
import {showConsoler} from '../constants/logUtils';

export class SecretManager {
  static configModle: ConfigModel;

  static init() {
    SecretManager.configModle = new ConfigModel(
      Config.POSTS_URL!,
      Config.BASIC_URL!,
    );

    showConsoler(
      `url>>>>>>>>${JSON.stringify(SecretManager.configModle.basicUrl)}`,
    );
  }
}
