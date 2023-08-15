import { DefaultTheme } from 'styled-components';

const colors = {
  ligthgray: '#D9D9D9',

  mainbackground: '#000000',
  content: '#D6FF5C',
  gray: '#3E3E47',
  textlightgray: '#C3C3C6',
  termsgray: '#9E9EA3',

  main: ' #D6FF5C',
  white: '#ffffff',
  gray1: '#0C0A0A',
  gray2: '#2C2C34',
  gray3: '#3E3E47',
  gray4: '#4D4D58',
  gray5: '#62626C',
  gray6: '#9E9EA3',
  gray7: '#C3C3C6',
  gray8: '#D9D9D9',
  gray9: '#F2F2F7',

  tint1: '#FF2D55',

  red2: '#ED6060',

  /* Main Btn State */
  hover: '#A2D900',
  disabled: '#6A744D',

  /* Error */
  error: '#FF2D55',

  /* Sub Btn State */
  subBtnDefault: '#D9D9D9',
  subBtnHover: '#9E9EA3',
  subBtnDisabled: '62626C',
};

const borderRadius = {
  borderRadius30: '30px',
  borderRadius50: '50px',
  headerRadius30: '0 0 30px 30px',
  borderRadius20: '20px',
  borderRadius7: '7px',
  borderRadius10: '10px',
  borderRadius15: '15px',
  borderRadius5: '5px',
  borderRadius14: '14px',
};

const innerContainer = {
  width: '100%',
  padding: '0 16px',
};

export type TColorsTypes = typeof colors;
export type TBorderRadiusTypes = typeof borderRadius;
export type TInnerContainer = typeof innerContainer;

export const theme: DefaultTheme = {
  colors,
  borderRadius,
  innerContainer,
};
