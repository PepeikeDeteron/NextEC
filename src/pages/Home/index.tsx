import Head from 'next/head';
import Template from '@/components/templates/Home';

const Home: React.VFC = () => {
  return (
    <>
      <Head>
        <title>ホーム画面</title>
      </Head>
      <Template />
    </>
  );
};

export default Home;
