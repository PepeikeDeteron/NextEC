import Head from 'next/head';
import SignOut from '@/components/templates/SignOut';
import Template from '@/components/templates/Home';

const Home: React.VFC = () => {
  return (
    <>
      <Head>
        <title>ホーム画面</title>
      </Head>
      <Template />
      <SignOut />
    </>
  );
};

export default Home;
