export class ConfigModel {
  graphqlUrl: string = '';
  restApiStagingUrl: string = '';

  stagingUrl: string = '';
  constructor(
    graphqlUrl: string,
    restApiStagingUrl: string,
    stagingUrl: string,
  ) {
    this.graphqlUrl = graphqlUrl;
    this.restApiStagingUrl = restApiStagingUrl;
    this.stagingUrl = stagingUrl;
  }
}
