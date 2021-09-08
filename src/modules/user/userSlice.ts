import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userProps } from '@/models/types';

type State = {
  users: userProps;
};

const initialState: State = {
  users: {
    isSignedIn: false,
    uid: '',
    username: '',
  },
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signIn: (state: State, action: PayloadAction<userProps>) => {
      state.users.isSignedIn = true;
      state.users.uid = action.payload.uid;
      state.users.username = action.payload.username;
    },
    signOut: (state: State) => {
      (state.users.isSignedIn = false), (state.users.uid = '');
      state.users.username = '';
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
