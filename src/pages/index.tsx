import React from 'react';
import TestButtonList from '@/components/molecules/TestButtonList';

import { useDispatch } from 'react-redux';
import { signIn } from '@/modules/users/usersSlice';

const Home: React.VFC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <TestButtonList />

      <button
        onClick={() => dispatch(signIn({ uid: '0001', username: 'user' }))}
      >
        Sign In
      </button>
    </>
  );
};

export default Home;
