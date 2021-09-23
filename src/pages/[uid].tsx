import Head from 'next/head'
import Template from '@/components/templates/ItemDetail'

const ItemDetail: React.VFC = () => {
  return (
    <>
      <Head>
        <title>商品詳細</title>
      </Head>
      <Template />
    </>
  )
}

export default ItemDetail
