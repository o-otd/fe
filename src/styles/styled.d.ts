import 'styled-components';
import {
  DeviceTypes,
  TBorderRadiusTypes,
  TColorsTypes,
  TInnerContainer,
} from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: TColorsTypes;
    borderRadius: TBorderRadiusTypes;
    innerContainer: TInnerContainer;
  }
}
