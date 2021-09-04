import React from 'react';
import TestButton from '@/components/atoms/TestButton';

const TestButtonList: React.VFC = () => {
  return (
    <>
      <TestButton color="primary" value="ボタン1" />
      <TestButton color="secondary" value="ボタン2" />
    </>
  );
};

export default TestButtonList;
