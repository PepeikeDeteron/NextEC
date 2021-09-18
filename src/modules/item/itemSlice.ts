import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { dbV8 } from '@/lib/firebase';
import { itemProps } from '@/models/types';

type State = {
  item: {
    list: itemProps[];
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
    items: (state: State, action: PayloadAction<itemProps[]>) => {
      return {
        ...state,
        list: [...action.payload],
      };
    },
  },
});

export const { items } = itemSlice.actions;

// ----------------------------------------------------------------------------

// 登録されている商品を取得する
export const fetchItems = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    // DB から取得した item のデータを登録日時に対する降順で整理
    const itemRef = dbV8.collection('item').orderBy('created_at', 'desc');

    itemRef.get().then((snapshots) => {
      const itemList: itemProps[] = [];

      snapshots.forEach((snapshot) => {
        itemList.push(snapshot.data() as itemProps);
      });
      dispatch(items(itemList));
    });
  };
};
