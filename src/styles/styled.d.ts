import 'styled-components';
import { DeviceTypes, TColorsTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: TColorsTypes;
  }
}
