import { Button, CircularProgress, ModalProps, Typography } from '@mui/material';
import React from 'react';

import { theme } from 'theme';
import { FBModalButtonProps } from '..';

interface ModalButtonProps extends FBModalButtonProps, Pick<ModalProps, 'onClose'> {}

const ModalButton = ({ color, label, loading, disabled, onClose, onClick }: ModalButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }

    return onClose?.({}, 'escapeKeyDown');
  };

  return (
    <Button
      variant="text"
      size="small"
      onClick={handleClick}
      disabled={loading || disabled}
      endIcon={loading && <CircularProgress size={14} />}
      sx={{
        ...(disabled
          ? {
              backgroundColor: theme.palette.grey[200],
              opacity: 0.3,
            }
          : {}),
      }}>
      <Typography color={color} fontWeight={500}>
        {label}
      </Typography>
    </Button>
  );
};

export default ModalButton;
