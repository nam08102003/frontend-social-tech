import { Box, BoxProps, Typography } from '@mui/material';
import React from 'react';
import { theme } from 'theme';

interface FBWrapperBoxProps extends BoxProps {
  title?: string;
  noPadding?: boolean;
  containerProps?: Omit<BoxProps, 'children'>;
}

const FBWrapperBox = ({
  title,
  noPadding,
  children,
  containerProps,
  ...props
}: FBWrapperBoxProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor={theme.palette.common.white}
      borderRadius={2}
      boxShadow="0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)"
      {...(!noPadding ? { p: 3 } : {})}
      {...containerProps}>
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
