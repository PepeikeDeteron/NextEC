import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Typography, TypographyProps } from '@material-ui/core'
import { dbV8 } from '@/lib/firebase'
import { itemProps } from '@/models/types'
import Spacer from '@/components/atoms/Spacer'

type ContainerProps = Omit<TypographyProps, 'variant'> & {
  items: itemProps
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { className, items } = props

  return (
    <section className={className}>
      <div className="detail">
        <Typography className="title" variant="caption">
          {items.name}
        </Typography>
        <Spacer height={32} />
        <p>{items.description}</p>
        <Spacer height={16} />
        <p>{`容量: ${items.capacity} ml`}</p>
        <p>{`在庫: ${items.number} 点`}</p>
        <p>{`価格: ${items.price} 円`}</p>
      </div>
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

  const containerProps = { items }

  return <StyledComponent {...{ ...(containerProps as any) }} />
}

export default Container
