import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/modules/store';
import Link from 'next/link';

const Home: React.VFC = () => {
  const userId = useSelector((state: RootState) => state.user.user.uid);
  const userName = useSelector((state: RootState) => state.user.user.username);

  return (
    <>
      <h2>Home</h2>
      <p>ID：{userId}</p>
      <p>ユーザ名：{userName}</p>

      <br />
      <Link href="/Item/Register">
        <button>商品登録画面</button>
      </Link>
    </>
  );
};

export default Home;
