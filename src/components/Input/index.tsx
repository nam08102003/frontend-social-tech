import { FormControl, FormControlProps, OutlinedInputProps } from '@mui/material';
import { omit } from 'lodash';
import { RefObject } from 'react';

import { BaseOutlinedInput, BaseOutlinedInputProps, StyledFormLabel } from './Input.styled';

export interface FBInputProps extends OutlinedInputProps, BaseOutlinedInputProps {
  helperText?: string;
  maxLength?: number;
  containerRef?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null;
  containerProps?: FormControlProps;
  backgroundColor?: string;
}

const FBInput = ({
  fullWidth,
  label,
  helperText,
  error,
  required,
  containerRef,
  containerProps,
  ...props
}: FBInputProps) => {
  return (
    <FormControl fullWidth={fullWidth} error={error} required={required} {...containerProps}>
      {!!label && (
        <StyledFormLabel error={false} focused={false} required={required}>
          {label}
        </StyledFormLabel>
      )}
      <BaseOutlinedInput
        ref={containerRef}
        sx={{
          ...props.sx,
          [`input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button`]: {
            '-webkit-appearance': 'none',
            margin: 0
          }
        }}
        {...omit(props, ['sx'])}
      />
    </FormControl>
  );
};

export default FBInput;
