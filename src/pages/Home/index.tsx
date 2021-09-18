import Head from 'next/head';
import Template from '@/components/templates/Home';
import SignOut from '@/components/organisms/SignOut';

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
