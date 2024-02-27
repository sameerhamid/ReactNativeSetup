import Config from 'react-native-config';
import {ConfigModel} from './ConfigModel';

export enum ENVIRONMENT {
  STAGING = 1,
  PRODUCTION = 2,
}

export class SecretManager {
  static configModel: ConfigModel;
  static SELECTED_ENVIRONMENT = ENVIRONMENT.STAGING;

  static init(): void {
    switch (SecretManager.SELECTED_ENVIRONMENT) {
      case ENVIRONMENT.STAGING:
        console.log('staging');

        SecretManager.configModel = new ConfigModel(
          Config.STAGING_GRAPH_URL!,
          Config.REST_API_BASE_URL!,
          Config.LOCAL_GRAPH_URL!,
        );
        break;
      case ENVIRONMENT.PRODUCTION:
        console.log('production');
        SecretManager.configModel = new ConfigModel(
          Config.STAGING_GRAPH_URL!,
          Config.REST_API_BASE_URL!,
          Config.LOCAL_GRAPH_URL!,
        );
        break;
      default:
        SecretManager.configModel = new ConfigModel(
          Config.STAGING_GRAPH_URL!,
          Config.REST_API_BASE_URL!,
          Config.LOCAL_GRAPH_URL!,
        );
        console.log(
          `staging creds >>> ${JSON.stringify(SecretManager.configModel)}`,
        );
        break;
    }
  }
}
