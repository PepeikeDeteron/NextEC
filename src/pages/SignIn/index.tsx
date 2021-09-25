import Head from 'next/head'
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
    </>
  )
}

export default SignIn
