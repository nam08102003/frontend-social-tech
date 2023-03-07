import { Box, BoxProps, Typography } from '@mui/material';
import React from 'react';
import { theme } from '../../theme';

interface FBWrapperBoxProps extends BoxProps {
  title?: string;
  noPadding?: boolean;
  containerProps?: Omit<BoxProps, 'children'>;
}

const FBWrapperBox = ({ title, noPadding, children, containerProps, ...props }: FBWrapperBoxProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor={theme.palette.common.white}
      borderRadius={2}
      boxShadow="0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)"
      {...(!noPadding ? { py: 2, px: 3 } : {})}
      {...containerProps}
    >
      {title && (
        <Box mb={3}>
          <Typography variant="title3" fontWeight={600}>
            {title}
          </Typography>
        </Box>
      )}
      <Box minHeight={0} flexGrow={1} {...props}>
        {children}
      </Box>
    </Box>
  );
};

export default FBWrapperBox;
