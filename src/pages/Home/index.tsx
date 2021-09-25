import Head from 'next/head'
import Template from '@/components/templates/Home'
import SignOut from '@/components/organisms/SignOut'
import { useSelector } from 'react-redux'
import { RootState } from '@/features/store'

const Home: React.VFC = () => {
  const userId = useSelector((state: RootState) => state.users.user.uid)
  const userName = useSelector((state: RootState) => state.users.user.username)

  return (
    <>
      <Head>
        <title>NextEC｜お酒の通販サイト</title>
      </Head>
      <p>UserId: {userId}</p>
      <p>UserName: {userName}</p>
      <SignOut />
      <Template />
    </>
  )
}

export default Home
