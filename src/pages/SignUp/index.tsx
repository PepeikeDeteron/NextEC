import Head from 'next/head';
import Template from '@/components/templates/SignUp';

const SignUp: React.VFC = () => {
  return (
    <div>
      <Head>
        <title>新規登録</title>
      </Head>
      <Template />
    </div>
  );
};

export default SignUp;
