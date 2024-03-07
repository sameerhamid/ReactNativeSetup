import Config from 'react-native-config';
import {ConfingModel} from './ConfigModel';

export enum ENVIRONMENT {
  STAGING = 1,
  PRODUCTION = 2,
}

export class SecretManager {
  static configModle: ConfingModel;
  static SELECTED_ENVIRONMENT = ENVIRONMENT.STAGING;

  static init(): void {
    switch (SecretManager.SELECTED_ENVIRONMENT) {
      case ENVIRONMENT.STAGING:
        SecretManager.configModle = new ConfingModel(
          Config.POSTS_URL_STAGING!,
          Config.POSTS_URL_APP!,
        );
        break;
      case ENVIRONMENT.PRODUCTION:
        SecretManager.configModle = new ConfingModel(
          Config.POSTS_URL_STAGING!,
          Config.POSTS_URL_APP!,
        );
    }
  }
}
