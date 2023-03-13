import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from 'containers/Forms/Login';
import useGetCookieData from 'hooks/useGetCookie';
import { useNavigate } from 'react-router-dom';
import { theme } from 'theme';
import Loading from 'components/Loading';
import useResponsive from 'hooks/useResponsive';
import Footer from 'containers/Layouts/Footer';

const Auth = () => {
  const { t } = useTranslation();
  const { token, loaded } = useGetCookieData();
  const navigate = useNavigate();
  const { matched, isDesktop } = useResponsive();

  if (!loaded) {
    return <Loading />;
  }

  if (token) {
    navigate('/login');
  }

  return (
    <>
      <Box bgcolor={theme.palette.grey[500]}>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100vh',
            gap: 3,
            [theme.breakpoints.down('md')]: {
              height: 'auto',
              py: 10,
              flexDirection: 'column',
              justifyContent: 'center',
            },
          }}>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            gap={2}
            textAlign={{ xs: 'center', md: 'left' }}
            maxWidth={450}>
            <Typography color={theme.palette.primary.main} variant="h1">
              {t('facebook')}
            </Typography>
            <Typography variant={!isDesktop ? 'title2' : 'title1'}>
              {t('logInDescription')}
            </Typography>
          </Box>
          <LoginForm />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Auth;
