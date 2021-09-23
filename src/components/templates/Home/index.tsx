import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchItems } from '@/features/item/itemSlice'
import { RootState } from '@/features/store'
import ItemCard from '@/components/organisms/ItemCard'
import { itemProps } from '@/models/types'

type ContainerProps = {
  items: itemProps[]
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { className, items } = props

  // 商品一覧をリスト表示
  return (
    <section className={className}>
      {items.length > 0 &&
        items.map((item) => (
          <ItemCard
            key={item.name}
            // images={item.images}
            name={item.name}
            price={item.price}
          />
        ))}
    </section>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  max-width: 1260px;
  margin: 0 auto;
  padding: 4rem 0 2rem 3rem;
  gap: 3rem;
`

const Container: React.VFC<Partial<ContainerProps>> = () => {
  const dispatch = useDispatch()

  const items = useSelector((state: RootState) => state.items.item)

  // 初期レンダー時に商品一覧を取得
  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  const containerProps = { items }

  return <StyledComponent {...{ ...containerProps }} />
}

export default Container
