import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersProps } from '@/models/types';

type State = {
  users: usersProps;
};

const initialState: State = {
  users: {
    isSignedIn: false,
    uid: '',
    username: '',
  },
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signIn: (state: State, action: PayloadAction<usersProps>) => {
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

export const { signIn, signOut } = usersSlice.actions;
