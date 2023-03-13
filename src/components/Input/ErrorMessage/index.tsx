import { Box, FormHelperTextProps } from '@mui/material';
import React, { ElementType } from 'react';

import { StyledFormHelperText } from './ErrorMessage.styled';

import { ReactComponent as AlertIcon } from 'assets/alertIcon.svg';

export interface FBInputErrorMessageProps extends FormHelperTextProps {
  component?: ElementType;
}

const FBInputErrorMessage = ({ children, ...props }: FBInputErrorMessageProps) => {
  return (
    <StyledFormHelperText component="div" {...props}>
      <Box display="flex" alignItems="center">
        {!!props.error && (
          <Box display="flex" alignItems="center" mr={0.75}>
            <AlertIcon />
          </Box>
        )}
        {children}
      </Box>
    </StyledFormHelperText>
  );
};

export default FBInputErrorMessage;
