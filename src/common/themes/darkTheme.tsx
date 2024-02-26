// const DarkTheme = {
//   isDark: true,
//   colors: {
//     // background: '#000',
//     // text: '#fff',
//     // tabbarBackground: '#262626',
//     tabbarActiveColor: 'teal',
//     tabbarInActiveColor: '#FFF',
//     primary: '#fff',
//     background: '#000',
//     card: 'string',
//     text: 'white',
//     border: '#FFF',
//     notification: 'teal',
//   },
// };

// export default DarkTheme;

import {ThemeModelItem} from '../model/theme/themeModel';
import Colors from '../styles/colors';
/*
 * pass color here as Dark theme
 */
export const DarkTheme: ThemeModelItem = {
  dark: true,
  colors: {
    primary: Colors.primary,
    background: Colors.background,
    card: Colors.card,
    text: Colors.text,
    border: Colors.border,
    notification: Colors.notification,
  },
};
