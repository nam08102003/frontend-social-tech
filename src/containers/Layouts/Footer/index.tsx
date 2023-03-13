import { Box, Container, Divider, Typography } from '@mui/material';
import SwitchLang from 'components/SwichLang';
import React from 'react';
import i18n from 'services/i18n';

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <Container maxWidth="lg">
        <SwitchLang />
        <Divider />
        <Box sx={{ m: 2 }}>
          <Typography variant="caption2">{i18n.t('copyright', { year })}</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
