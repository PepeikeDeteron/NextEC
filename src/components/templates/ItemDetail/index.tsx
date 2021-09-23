import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { collection, doc, getDoc } from '@firebase/firestore'
import { db } from '@/lib/firebase'
import { itemProps } from '@/models/types'

type ContainerProps = {
  items: itemProps
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { items } = props

  console.log(items)

  return (
    <section>
      <h1>動作確認</h1>
      <p>{`商品名: ${items.name}`}</p>
      <p>{`個数: ${items.number}`}</p>
      <p>{`価格: ${items.price}`}</p>
    </section>
  )
}

const StyledComponent = styled(Component)``

const Container: React.VFC<Partial<ContainerProps>> = () => {
  const [items, setItems] = useState<itemProps[]>([])

  ;async () => {
    try {
      const itemRef = collection(db, 'item')
      const uid = doc(itemRef).id
      const itemSnap = await getDoc(doc(itemRef, uid))

      useEffect(() => {
        setItems(itemSnap.data() as itemProps[])
      }, [])
    } catch (error) {
      if (error instanceof Error) {
        alert('商品情報を取得できませんでした。')
        console.error(error.message)
      }
    }
  }

  const containerProps = { items }

  return <StyledComponent {...{ ...(containerProps as any) }} />
}

export default Container
