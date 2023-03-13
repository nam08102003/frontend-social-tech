import { CaseReducer, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import FBConnectionInstance from '../../api';
import { AuthResponse, LoginParams, LogoutParam, SignUpParams, User } from '../../typing/auth';
import cookie from 'cookie';

export interface AuthState {
  user: User | null;
  accessToken: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
};
export interface PayloadActionType {}

const setUser: CaseReducer<AuthState, PayloadAction<User | null>> = (state, { payload }) => {
  state.user = payload;
};

const setToken: CaseReducer<AuthState, PayloadAction<string | null>> = (state, { payload }) => {
  state.accessToken = payload;
};

const setAuth: CaseReducer<AuthState, PayloadAction<AuthState>> = (state, { payload }) => {
  state.accessToken = payload.accessToken;
  state.user = payload.user;
};

export const handleLogin = createAsyncThunk<User, LoginParams>('auth/login', async (body) => {
  try {
    const { data } = await FBConnectionInstance.post<AuthResponse>('/auth/login', body);
    const setCookie = cookie.serialize('token', data.accessToken, { path: '/' });
    document.cookie = setCookie;

    return data.result;
  } catch (error: any) {
    throw new Error(error);
  }
});

export const handleSignUp = createAsyncThunk<AuthResponse, SignUpParams>(
  'auth/register',
  async (body) => {
    try {
      const { data: registeredUser } = await FBConnectionInstance.post<AuthResponse>(
        '/auth/register',
        body,
      );

      return registeredUser;
    } catch (error: any) {
      throw new Error(error);
    }
  },
);

export const handleLogout = createAsyncThunk<void, LogoutParam>('auth/logout', async (body) => {
  try {
    await FBConnectionInstance.post('/auth/logout', { headers: { body } });
  } catch (error: any) {
    throw new Error(error);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser,
    setToken,
    setAuth,
  },
  extraReducers: (builder) => {
    builder.addCase(handleLogout.fulfilled, (state) => {
      state.user = null;
      state.accessToken = null;
    });
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export const { caseReducers } = authSlice;
