import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loading from 'components/Loading';
import useGetCookieData from 'hooks/useGetCookie';
import { AppState } from 'stores';
import { handleLogout as logOut } from 'stores/slices/auth';

const Homepage = () => {
  const { token, loaded, clearCookieData } = useGetCookieData();
  const { user } = useSelector((state: AppState) => state.auth);

  const handleLogout = () => {
    clearCookieData('token');
    logOut({ token: token as string });
  };

  if (!token && loaded) {
    return <Navigate to="/auth" />;
  }

  if (token && loaded) {
    return (
      <Box>
        <Typography>{user?.fullName}</Typography>
        <Button variant="contained" onClick={handleLogout}>
          Login Success, Log out
        </Button>
      </Box>
    );
  }

  return <Loading />;
};

export default Homepage;
