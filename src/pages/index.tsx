import React from 'react';
import RegisterButton from '@/components/atoms/RegisterButton';
import TextField from '@/components/atoms/TextField';

const Home: React.VFC = () => {
  return (
    <>
      <TextField label="表示確認" />
      <TextField label="表示確認2" />
      <RegisterButton
        color="primary"
        label={'表示確認'}
        onClick={() => console.log('Clicked')}
      />
    </>
  );
};

export default Home;
