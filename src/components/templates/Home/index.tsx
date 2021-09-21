import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchItems } from '@/modules/item/itemSlice'
import { RootState } from '@/modules/store'
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
        items.filter((item) => (
          <ItemCard
            key={item.name}
            images={item.images}
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
  width: 100%;
  margin: 0 auto;
  padding: 3rem;
  gap: 4rem;
`

const Container: React.VFC<Partial<ContainerProps>> = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.items.item.list)

  // 初期レンダー時に商品一覧を取得
  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  const containerProps = { items }

  return <StyledComponent {...{ ...containerProps }} />
}

export default Container
