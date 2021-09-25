import Head from 'next/head'
import Header from '@/components/organisms/Header'
import SignOut from '@/components/organisms/SignOut'
import Template from '@/components/templates/Home'

const Home: React.VFC = () => {
  return (
    <>
      <Head>
        <title>NextEC｜お酒の通販サイト</title>
      </Head>
      <Header />
      <Template />
      <SignOut />
    </>
  )
}

export default Home
