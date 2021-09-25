import Head from 'next/head'
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
    </>
  )
}

export default ResetPassword
