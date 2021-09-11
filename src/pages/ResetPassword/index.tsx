import Head from 'next/head';
import Template from '@/components/templates/ResetPassword';

const ResetPassword: React.VFC = () => {
  return (
    <>
      <Head>
        <title>パスワードリセット</title>
      </Head>
      <Template />
    </>
  );
};

export default ResetPassword;
