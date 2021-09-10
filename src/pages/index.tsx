import React from 'react';
import SignUp from '@/components/templates/SignUp';
import SignIn from '@/components/templates/SignIn';

const Home: React.VFC = () => {
  return (
    <>
      <SignUp />
      <SignIn />
    </>
  );
};

export default Home;
