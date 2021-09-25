import Head from 'next/head'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import Template from '@/components/templates/SignIn'

const SignIn: React.VFC = () => {
  return (
    <>
      <Head>
        <title>サインイン</title>
      </Head>
      <Header />
      <Template />
      <Footer />
    </>
  )
}

export default SignIn
