import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/modules/store';
import Spacer from '@/components/atoms/Spacer';
import ItemRegister from '@/components/organisms/ItemRegister';

const Home: React.VFC = () => {
  const userId = useSelector((state: RootState) => state.user.user.uid);
  const userName = useSelector((state: RootState) => state.user.user.username);

  return (
    <>
      <h2>Home</h2>
      <p>ID：{userId}</p>
      <p>ユーザ名：{userName}</p>
      <Spacer height={128} />
      <ItemRegister />
    </>
  );
};

export default Home;
