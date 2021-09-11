import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userProps } from '@/models/types';

type State = {
  user: userProps;
};

const initialState: State = {
  user: {
    isSignedIn: false,
    role: '',
    uid: '',
    username: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state: State, action: PayloadAction<userProps>) => {
      state.user.isSignedIn = true;
      state.user.role = action.payload.role;
      state.user.uid = action.payload.uid;
      state.user.username = action.payload.username;
    },
    signOut: (state: State) => {
      state.user.isSignedIn = false;
      state.user.role = '';
      state.user.uid = '';
      state.user.username = '';
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
