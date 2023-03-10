import { FormControl, FormControlProps, OutlinedInput, OutlinedInputProps } from '@mui/material';
import { omit } from 'lodash';
import { RefObject } from 'react';
import FBInputErrorMessage from './ErrorMessage';

import { StyledFormLabel } from './Input.styled';

export interface FBInputProps extends OutlinedInputProps {
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
      <OutlinedInput
        ref={containerRef}
        sx={{
          p: 0.5,
          fontSize: 18,
          ...props.sx,
          [`input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button`]: {
            WebkitAppearance: 'none',
            margin: 0,
          },
        }}
        {...omit(props, ['sx'])}
      />
      {!!helperText && <FBInputErrorMessage error={error}>{helperText}</FBInputErrorMessage>}
    </FormControl>
  );
};

export default FBInput;
