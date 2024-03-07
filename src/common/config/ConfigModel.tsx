export class ConfingModel {
  postsStaginUrl: string = '';
  postsAppUrl: string = '';
  constructor(postsStaginUrl: string, postsAppUrl: string) {
    this.postsAppUrl = postsAppUrl;
    this.postsStaginUrl = postsStaginUrl;
  }
}
