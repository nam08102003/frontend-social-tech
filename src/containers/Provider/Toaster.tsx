import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'stores';
import { commonActions } from 'stores/slices/common';

const Toaster = () => {
  const dispatch = useDispatch();

  const messageState = useSelector((state: AppState) => state.common.message);

  const handleHideAlertMessage = () => {
    dispatch(commonActions.hideAlertMessage());
  };

  return (
    <Snackbar
      open={!!messageState.open}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={4000}
      onClose={handleHideAlertMessage}>
      <Alert severity={messageState.type || 'info'}>{messageState.message}</Alert>
    </Snackbar>
  );
};

export default Toaster;
