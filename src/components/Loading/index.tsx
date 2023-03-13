import { Box } from '@mui/material';
import { ReactComponent as LogoRounded } from 'assets/logo-rounded.svg';
import React from 'react';

const Loading = () => {
  return (
    <Box display="flex" height="100vh" alignItems="center" justifyContent="center">
      <LogoRounded />
    </Box>
  );
};

export default Loading;
