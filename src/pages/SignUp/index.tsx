import Head from 'next/head'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import Template from '@/components/templates/SignUp'

const SignUp: React.VFC = () => {
  return (
    <>
      <Head>
        <title>新規登録</title>
      </Head>
      <Header />
      <Template />
      <Footer />
    </>
  )
}

export default SignUp
