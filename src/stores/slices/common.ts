import { AlertColor } from '@mui/material';
import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MessageState {
  open: boolean;
  message: string;
  type?: AlertColor;
}

export interface CommonState {
  message: MessageState;
}

const initialState: CommonState = {
  message: {
    open: false,
    message: '',
  },
};

const showAlertMessage: CaseReducer<CommonState, PayloadAction<Omit<MessageState, 'open'>>> = (
  state,
  { payload },
) => {
  state.message = { ...payload, open: true };
};

const hideAlertMessage: CaseReducer<CommonState> = (state) => {
  state.message.open = false;
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    showAlertMessage,
    hideAlertMessage,
  },
});

export const commonReducer = commonSlice.reducer;
export const commonActions = commonSlice.actions;
