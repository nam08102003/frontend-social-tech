import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const LoadingCircle = () => {
  return (
    <Box display="flex" height="100vh" alignItems="center" justifyContent="center">
      <CircularProgress />
    </Box>
  );
};

export default LoadingCircle;
