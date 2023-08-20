import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import GlobalFonts from 'styles/globalFonts';
import { theme } from 'styles/theme';
import App from './App';
import { Provider } from 'react-redux';
import store from 'redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalFonts />
        <App />
      </ThemeProvider>
    </Provider>
  </>,
);
