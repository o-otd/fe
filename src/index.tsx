import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import GlobalFonts from 'styles/globalFonts';
import { theme } from 'styles/theme';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFonts />
      <App />
    </ThemeProvider>
  </>,
);
