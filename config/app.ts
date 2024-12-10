import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';

/**
 * Color scheme
 * @see https://reactnavigation.org/docs/themes/
 */

/** Dark */
export const appDarkScheme: Theme = {
  ...DarkTheme,
  dark: true,
};

/** Light */
export const appLightScheme: Theme = {
  ...DefaultTheme,
  dark: false,
};
