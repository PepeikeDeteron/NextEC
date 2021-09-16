import { createSlice } from '@reduxjs/toolkit';
import { firebaseTimestamp } from '@/lib/firebase';

type State = {
  item: {
    list: string[] | number[] | typeof firebaseTimestamp[];
  };
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
