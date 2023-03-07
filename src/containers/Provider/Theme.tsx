import { ThemeProvider } from '@emotion/react';
import { CssBaseline, GlobalStyles } from '@mui/material';
import React from 'react';
import { theme } from '../../theme';

import Toaster from './Toaster';

interface ThemeWrapperProviderProps {
  children: React.ReactNode;
}

const ThemeWrapperProvider = ({ children }: ThemeWrapperProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster />
      <GlobalStyles
        styles={{
          '::-webkit-scrollbar': {
            width: 16
          },
          '::-webkit-scrollbar-thumb': {
            borderRight: '8px #d6d7db solid',
            backgroundClip: 'padding-box'
          }
        }}
      />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapperProvider;
