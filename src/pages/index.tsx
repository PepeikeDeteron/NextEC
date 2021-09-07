import React from 'react';
import RegisterButton from '@/components/atoms/RegisterButton';

const Home: React.VFC = () => {
  return (
    <>
      <RegisterButton
        color="primary"
        label={'表示確認'}
        onClick={() => console.log('Clicked')}
      />
    </>
  );
};

export default Home;
