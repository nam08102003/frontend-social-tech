import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import LoadingCircle from '../../components/Loading/Circle';
import useGetCookieData from '../../hooks/useGetCookie';
import { AppState } from '../../stores';
import { handleLogout as logOut } from '../../stores/slices/auth';

const Homepage = () => {
  const { token, loaded, clearCookieData } = useGetCookieData();
  const { user } = useSelector((state: AppState) => state.auth);

  const handleLogout = () => {
    clearCookieData('token');
    logOut({ userId: user?.id as string });
  };

  if (!token && loaded) {
    return <Navigate to="/login" />;
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

  return <LoadingCircle />;
};

export default Homepage;
