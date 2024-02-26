// const LightTheme = {
//   isDark: false,
//   colors: {
//     background: '#F2F0F7',
//     text: 'black',
//     tabbarBackground: '#FFF',
//     tabbarActiveColor: 'teal',
//     tabbarInactiveColor: '#000',
//   },
// };

// export default LightTheme;

import {Colors} from '../styles/colors';
import {ThemeModelItem} from '../model/theme/themeModel';
/**
 * pass color here as light theme
 */
export const LightTheme: ThemeModelItem = {
  dark: false,
  colors: {
    // new colors
    primary: Colors.primary,
    background: Colors.background,
    card: Colors.card,
    text: Colors.text,
    border: Colors.border,
    notification: Colors.notification,
    black100: Colors.black100,
    blueText: Colors.blueText,
    cyan: Colors.cyan,
    cyanTheme: Colors.cyanTheme,
    darkSlateBackground: Colors.darkSlateBackground,
    darkTeal100: Colors.darkTeal100,
    deepSkyBlue100: Colors.deepSkyBlue100,
    frenchBlue100: Colors.frenchBlue100,
    grayBar: Colors.grayBar,
    grey100: Colors.grey100,
    lightBlackInput: Colors.lightBlackInput,
    lightGrey100: Colors.lightGrey100,
    lightTeal100: Colors.lightTeal100,
    opacityLight: Colors.opacityLight,
    orangeTheme: Colors.orangeTheme,
    purpleButtonTheme: Colors.purpleButtonTheme,
    purpleText: Colors.purpleText,
    slate: Colors.slate,
    slateBackground: Colors.slateBackground,
    white0: Colors.white0,
    white40: Colors.white40,
    white50: Colors.white50,
    white100: Colors.white100,
    yellowTheme: Colors.yellowTheme,
    lightBlack: Colors.lightBlack,
    black20: Colors.black20,
    black50: Colors.black50,
    black75: Colors.black75,
    purpleDisable: Colors.purpleDisable,
    greenTheme: Colors.greenTheme,
    purpleRecipe: Colors.purpleRecipe,
    purpleLight: Colors.purpleLight,
    orangeLightTheme: Colors.orangeLightTheme,
    ultraLightBlack: Colors.ultraLightBlack,
    darkGrey100: Colors.darkGrey100,
    profileGrey: Colors.profileGrey,
    profileTextInputFields: Colors.profileTextInputFields,

    splashBackground: Colors.splashBackground,
    progressBar: Colors.progressBar,
    workoutTimerBackground: Colors.workoutTimerBackground,
    transparency30Prcnt: Colors.transparency30Prcnt,
    lightSlateBackground: Colors.lightSlateBackground,
  },
};
