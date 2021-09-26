import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Typography, TypographyProps } from '@material-ui/core'
import { dbV8 } from '@/lib/firebase'
import { itemProps } from '@/models/types'
import Spacer from '@/components/atoms/Spacer'
// import ImageGallery from 'react-image-gallery'

type ContainerProps = Omit<TypographyProps, 'variant'> & {
  items: itemProps
  // images: itemProps['images'][]
  // galleries: string[]
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { className, items } = props

  return (
    <section className={className}>
      {items && (
        <div className="detail">
          <div className="center">
            <h2 className="maintenance">- - - メンテナンス中 - - -</h2>
            <Spacer height={4} />
            <p>※商品のイメージギャラリーを実装予定</p>
          </div>

          {/* <ImageGallery items={galleries}/> */}
          <Spacer height={64} />

          <Typography className="title" variant="caption">
            {items.name}
          </Typography>

          <Spacer height={32} />

          <Typography className="description" variant="caption">
            {items.description}
          </Typography>

          <Spacer height={32} />

          <Typography className="number">
            {`容量: ${items.capacity} ml`}
          </Typography>

          <Typography className="number">{`在庫: ${items.number} 点`}</Typography>

          <Typography className="number">{`価格: ${items.price} 円`}</Typography>
        </div>
      )}
    </section>
  )
}

const StyledComponent = styled(Component)`
  max-width: 1260px;
  margin: 0 auto;
  padding: 5rem 3rem;

  .detail {
    margin: 0 auto;
    max-width: 560px;
  }

  .title {
    font-size: 2.5rem;
  }

  .description {
    font-size: 1.7rem;
  }

  .number {
    font-size: 2rem;
  }

  .center {
    text-align: center;
  }

  .maintenance {
    color: red;
  }
`

const Container: React.VFC<Partial<ContainerProps>> = () => {
  const [items, setItems] = useState<itemProps[]>([])

  const router = useRouter()
  const uid = router.asPath // [uid] を文字列で取得

  // [uid] の商品情報を取得
  useEffect(() => {
    ;(async () => {
      const itemRef = dbV8.collection('item').doc(uid)
      const itemSnap = await itemRef.get()
      const itemData = itemSnap.data() as itemProps[]

      setItems(itemData)
    })()
  }, [uid])

  // 商品画像のスライダー
  // const galleries = [
  //   {
  //     original: props.images,
  //     thumbnail: props.images,
  //   }
  // ]

  const containerProps = { items }

  return <StyledComponent {...{ ...(containerProps as any) }} />
}

export default Container
