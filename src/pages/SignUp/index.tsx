import Head from 'next/head';
import Template from '@/components/templates/SignUp';

const SignUp: React.VFC = () => {
  return (
    <>
      <Head>
        <title>新規登録</title>
      </Head>
      <Template />
    </>
  );
};

export default SignUp;
