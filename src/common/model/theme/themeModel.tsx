export class Colors {
  primary: string;

  background: string;

  card: string;

  text: string;

  border: string;

  notification: string;

  black20?: string;

  black50?: string;

  black75?: string;

  black80?: string;

  black100?: string;

  brownishGrey100?: string;

  cyan?: string;

  danger100?: string;

  darkGrey100?: string;

  darkOrange100?: string;

  darkTeal100?: string;

  deepSkyBlue100?: string;

  frenchBlue100?: string;

  greyFade20?: string;

  lightGrey20?: string;

  lightGrey100?: string;

  lightOrange100?: string;

  lightTeal100?: string;

  offBlack100?: string;

  veryLightPink50?: string;

  veryLightPink100?: string;

  white0?: string;

  white40?: string;

  white50?: string;

  white100?: string;

  blueText?: string;

  cyanTheme?: string;

  darkSlateBackground?: string;

  grayBar?: string;

  grey100?: string;

  lightBlackInput?: string;

  opacityLight?: string;

  orangeTheme?: string;

  purpleButtonTheme?: string;

  purpleText?: string;

  slate?: string;

  slateBackground?: string;

  yellowTheme?: string;

  lightBlack?: string;

  purpleDisable?: string;

  greenTheme?: string;

  purpleRecipe?: string;

  orangeLightTheme?: string;

  purpleLight?: string;

  ultraLightBlack?: string;

  profileGrey?: string;

  profileTextInputFields?: string;

  purpleRightIconColor?: string;

  splashBackground?: string;

  progressBar?: string;

  workoutTimerBackground?: string;

  transparency30Prcnt?: string;

  lightSlateBackground?: string;

  constructor(
    primary: string,
    background: string,
    card: string,
    text: string,
    border: string,
    notification: string,
  ) {
    this.primary = primary;
    this.background = background;
    this.card = card;
    this.text = text;
    this.border = border;
    this.notification = notification;
  }
}

export class ThemeModelItem {
  dark: boolean;

  colors: Colors;

  constructor(dark: boolean, colors: Colors) {
    this.dark = dark;
    this.colors = colors;
  }
}

export class ThemeModel {
  ThemeModel?: ThemeModelItem;
}
