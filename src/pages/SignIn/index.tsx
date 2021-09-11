import Head from 'next/head';
import Template from '@/components/templates/SignIn';

const SignIn: React.VFC = () => {
  return (
    <div>
      <Head>
        <title>サインイン</title>
      </Head>
      <Template />
    </div>
  );
};

export default SignIn;
