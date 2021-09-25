import Head from 'next/head'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import Template from '@/components/templates/ResetPassword'

const ResetPassword: React.VFC = () => {
  return (
    <>
      <Head>
        <title>パスワードリセット</title>
      </Head>
      <Header />
      <Template />
      <Footer />
    </>
  )
}

export default ResetPassword
