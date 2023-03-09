import { DefaultTheme } from 'styled-components';

const colors = {
  ligthgray: '#D9D9D9',
  white: '#FFFFFF',
  mainbackground: '#000000',
  content: '#D6FF5C',
  gray: '#3E3E47',
  textlightgray: '#C3C3C6',
  termsgray: '#9E9EA3',
};

export type TColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
