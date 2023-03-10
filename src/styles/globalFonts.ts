import { createGlobalStyle } from 'styled-components';
import PretendardBlack from './fonts/Pretendard-Black.woff2';
import PretendardExtraBold from './fonts/Pretendard-ExtraBold.woff2';
import PretendardBold from './fonts/Pretendard-Bold.woff2';
import PretendardSemiBold from './fonts/Pretendard-SemiBold.woff2';
import PretendardMedium from './fonts/Pretendard-Medium.woff2';
import PretendardRegular from './fonts/Pretendard-Regular.woff2';
import PretendardLight from './fonts/Pretendard-Light.woff2';
import PretendardExtraLight from './fonts/Pretendard-ExtraLight.woff2';
import PretendardThin from './fonts/Pretendard-Thin.woff2';

const GlobalFonts = createGlobalStyle`

@font-face {
	font-family: 'Pretendard';
	font-weight: 900;
    src: local('PretendardBlack'), local('PretendardBlack');
	font-display: swap;
    src: url(${PretendardBlack}) format('woff2');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 800;
    src: local('PretendardExtraBold'), local('PretendardExtraBold');
	font-display: swap;
    src: url(${PretendardExtraBold}) format('woff2');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 700;
    src: local('PretendardBold'), local('PretendardBold');
	font-display: swap;
    src: url(${PretendardBold}) format('woff2');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 600;
    src: local('PretendardSemiBold'), local('PretendardSemiBold');
	font-display: swap;
    src: url(${PretendardSemiBold}) format('woff2');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 500;
    src: local('PretendardMedium'), local('PretendardMedium');
	font-display: swap;
    src: url(${PretendardMedium}) format('woff2');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 400;
    src: local('PretendardRegular'), local('PretendardRegular');
	font-display: swap;
    src: url(${PretendardRegular}) format('woff2');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 300;
    src: local('PretendardLight'), local('PretendardLight');
	font-display: swap;
    src: url(${PretendardLight}) format('woff2');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 200;
    src: local('PretendardExtraLight'), local('PretendardExtraLight');
	font-display: swap;
    src: url(${PretendardExtraLight}) format('woff2');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 100;
    src: local('PretendardThin'), local('PretendardThin');
	font-display: swap;
    src: url(${PretendardThin}) format('woff2');
}



`;

export default GlobalFonts;
