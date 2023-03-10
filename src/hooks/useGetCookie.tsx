import cookie from 'cookie';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export type CookieKeys = 'token';

const useGetCookieData = () => {
  const dispatch = useDispatch();

  const [currentToken, setCurrentToken] = React.useState<string>();
  const [currentUser, setCurrentUser] = React.useState<number>();
  const [loaded, setLoaded] = React.useState<boolean>(false);

  const setCookieData = useCallback(
    (key: CookieKeys, value: string, options?: cookie.CookieSerializeOptions) => {
      const setCookie = cookie.serialize(key, value, { path: '/', ...options });
      document.cookie = setCookie;
    },
    [],
  );

  const clearCookieData = useCallback(
    (key: CookieKeys, options?: cookie.CookieSerializeOptions) => {
      const clearCookie = cookie.serialize(key, '', {
        expires: new Date(1970),
        path: '/',
        ...options,
      });
      document.cookie = clearCookie;
    },
    [],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const { token: idToken } = cookie.parse(document.cookie);
      setCurrentToken(idToken);
      setCurrentUser(currentUser ? currentUser : undefined);
      setLoaded(true);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return {
    token: currentToken,
    loaded,
    setCookieData,
    clearCookieData,
  };
};

export default useGetCookieData;
