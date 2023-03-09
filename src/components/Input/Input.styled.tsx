import styled from '@emotion/styled';
import { FormHelperText, FormHelperTextProps, FormLabel, OutlinedInput } from '@mui/material';
import { ElementType } from 'react';

export interface StyledFormHelperTextProps extends FormHelperTextProps {
  component?: ElementType;
}

export const StyledFormLabel = styled(FormLabel)`
  color: ${({ theme }) => theme.palette.common.black};
  padding-bottom: ${({ theme }) => theme.spacing(0.5)};
  line-height: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.spacing(2)};
  font-weight: 500;
`;

export const StyledFormHelperText = styled(FormHelperText)<StyledFormHelperTextProps>`
  margin: ${({ theme }) => theme.spacing(0.5)} 0 0 0;
  font-size: ${({ theme }) => theme.spacing(1.75)};
`;
