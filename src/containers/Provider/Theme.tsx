import { ThemeProvider } from '@emotion/react';
import useGetCookieData from 'hooks/useGetCookie';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { useLazyGetUserQuery } from 'stores/services/user';
import { authActions } from 'stores/slices/auth';
import { theme } from 'theme';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Toaster from './Toaster';

interface ThemeWrapperProviderProps {
  children: React.ReactNode;
}

const ThemeWrapperProvider = ({ children }: ThemeWrapperProviderProps) => {
  const dispatch = useDispatch();
  const [getUser] = useLazyGetUserQuery();
  const { token, loaded } = useGetCookieData();

  useEffect(() => {
    if (token && loaded) {
      getUser({ token })
        .unwrap()
        .then((data) => {
          dispatch(
            authActions.setAuth({
              accessToken: token,
              user: data.result,
            }),
          );
        });
    }
  }, [token]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster />
      <GlobalStyles
        styles={{
          '::-webkit-scrollbar-thumb': {
            borderRight: '8px #d6d7db solid',
            backgroundClip: 'padding-box',
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapperProvider;
