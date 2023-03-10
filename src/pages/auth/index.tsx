import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../../containers/Form/Login';
import useGetCookieData from '../../hooks/useGetCookie';
import { useNavigate } from 'react-router-dom';
import LoadingCircle from '../../components/Loading/Circle';
import { theme } from '../../theme';
import SwitchLang from '../../components/SwithLang';

const Login = () => {
  const { t } = useTranslation();
  const { token, loaded } = useGetCookieData();
  const navigate = useNavigate();

  if (!loaded) {
    return <LoadingCircle />;
  }

  if (token) {
    navigate('/login');
  }

  return (
    <>
      <Box bgcolor={theme.palette.grey[500]}>
        <Container
          maxWidth="lg"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100vh',
            [theme.breakpoints.down('md')]: {
              display: 'block',
            },
          }}>
          <Box width="50%" paddingRight={5} textAlign="left">
            <Box>
              <Typography color={theme.palette.primary.main} variant="h1">
                {t('facebook')}
              </Typography>
            </Box>
            <Typography variant="title1">{t('logInDescription')}</Typography>
          </Box>
          <LoginForm />
        </Container>
      </Box>
      <Container maxWidth="lg">
        <SwitchLang />
      </Container>
    </>
  );
};

export default Login;
