import { createSlice } from '@reduxjs/toolkit';

type State = {
  item: unknown;
};

const initialState: State = {
  item: {
    list: [],
  },
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    items: (state: State) => {
      return state;
    },
  },
});
