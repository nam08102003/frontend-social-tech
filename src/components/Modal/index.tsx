import { Box, BoxProps, Modal, ModalProps, Typography } from '@mui/material';
import { omit } from 'lodash';
import React from 'react';
import { theme } from '../../theme';

import * as Styles from './Modal.styled';
import ModalButton from './ModalButton';

export interface FBModalButtonProps {
  color?: string;
  label: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface FBModalProps extends ModalProps {
  title?: string;
  containerProps?: BoxProps;
  buttonProps?: FBModalButtonProps;
}

const FBModal = ({ title, children, containerProps, buttonProps, ...props }: FBModalProps) => {
  return (
    <Modal {...props}>
      <Styles.ModalContainer
        sx={{
          width: theme.spacing(50),
          [theme.breakpoints.up('md')]: {
            width: theme.spacing(75),
          },
          [theme.breakpoints.up('lg')]: {
            width: theme.spacing(90),
          },
          ...containerProps?.sx,
        }}
        {...omit(containerProps, ['sx'])}>
        <Box>
          {title && (
            <Box width="100%" pb={3}>
              <Typography
                ml="auto"
                mr="auto"
                variant="title3"
                fontWeight={600}
                lineHeight={theme.spacing(4)}
                minWidth={0}
                overflow="hidden"
                textOverflow="ellipsis">
                {title}
              </Typography>
            </Box>
          )}
          <Box>{children}</Box>
          <Box display="flex" justifyContent="end" gap={1} mt={2}>
            <ModalButton label="Cancel" color={theme.palette.grey[400]} onClose={props.onClose} />
            {buttonProps && <ModalButton {...buttonProps} />}
          </Box>
        </Box>
      </Styles.ModalContainer>
    </Modal>
  );
};

export default FBModal;
