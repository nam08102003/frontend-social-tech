import { Box, BoxProps, Button, CircularProgress, Typography } from '@mui/material';
import { omit } from 'lodash';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FBInput from 'components/Input';
import FBWrapperBox from 'components/Wrapper';
import { theme } from 'theme';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { LoginParams } from 'typing/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'stores';
import { authActions, handleLogin } from 'stores/slices/auth';
import { commonActions } from 'stores/slices/common';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props: BoxProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = Yup.object({
    email: Yup.string()
      .email(t('error.email') || '')
      .required(t('error.isARequiredField', { field: 'Email' }) || ''),
    password: Yup.string()
      .min(6, t('error.minPassword') || '')
      .max(50, t('error.maxPassword') || ''),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParams>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: LoginParams) => {
    setIsLoading(true);
    dispatch(handleLogin(values))
      .unwrap()
      .then((response) => {
        dispatch(authActions.setUser(response));
        navigate('/');
      })
      .catch(() => {
        dispatch(commonActions.showAlertMessage({ message: 'Lỗi', type: 'error' }));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <FBWrapperBox
      containerProps={props}
      sx={{
        width: 400,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mb: 2,
        ...props.sx,
      }}
      {...omit(props, ['sx'])}>
      <FBInput
        sx={{
          borderRadius: 2,
        }}
        fullWidth
        placeholder={t('placeholder.emailOrPhoneNumberSignIn') as string}
        inputProps={{ ...register('email') }}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <FBInput
        sx={{
          borderRadius: 2,
        }}
        fullWidth
        placeholder={t('placeholder.password') as string}
        inputProps={{ ...register('password') }}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button disabled={isLoading} fullWidth variant="contained" onClick={handleSubmit(onSubmit)}>
        {isLoading ? (
          <CircularProgress size={20} />
        ) : (
          <Typography variant="title3">{t('button.login')}</Typography>
        )}
      </Button>
      <Typography
        variant="subtitle1"
        textAlign="center"
        fontWeight={700}
        color={theme.palette.primary.main}>
        {t('button.forgotPassword')}
      </Typography>
      <Box>
        <hr />
      </Box>
      <Button color="secondary" variant="contained">
        <Typography variant="title3">{t('button.createNewAccount')}</Typography>
      </Button>
    </FBWrapperBox>
  );
};

export default LoginForm;
