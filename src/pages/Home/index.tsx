import Head from 'next/head'
// import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import Template from '@/components/templates/Home'

const Home: React.VFC = () => {
  return (
    <>
      <Head>
        <title>NextEC｜お酒の通販サイト</title>
      </Head>
      <Header />
      <Template />
      {/* <Footer /> */}
    </>
  )
}

export default Home
