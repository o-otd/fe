import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import GlobalFonts from 'styles/globalFonts';
import { theme } from 'styles/theme';
import App from './App';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const queryClient = new QueryClient();

root.render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalFonts />
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </>,
);
