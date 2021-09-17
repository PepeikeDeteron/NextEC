import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
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
      state.item.list = [...action.payload];
    },
  },
});

export const { items } = itemSlice.actions;

// ----------------------------------------------------------------------------

// 登録されている商品を取得する
export const fetchItems = async (): Promise<void> => {
  const dispatch = useDispatch();

  const itemList: itemProps[] = [];
  const itemRef = dbV8.collection('item');

  try {
    // DB から取得した item のデータを作成日時に対する降順で整理
    const query = itemRef.orderBy('created_at', 'desc');
    const snapshots = await query.get();

    snapshots.forEach((snapshot) => {
      const item = snapshot.data();
      itemList.push(item as itemProps);
    });

    dispatch(items(itemList));
  } catch (error) {
    if (error instanceof Error) {
      alert('商品のデータを取得できませんでした。');
      console.error(error.message);
    }
  }
};
