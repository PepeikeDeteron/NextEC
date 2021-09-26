import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import {
  Card,
  CardProps,
  CardContent,
  CardContentProps,
  CardMedia,
  CardMediaProps,
  Typography,
  TypographyProps,
} from '@material-ui/core'
import NoImage from '../../../assets/no-image.jpg'
import { itemProps } from '@/models/types'

type ContainerProps = CardProps &
  CardContentProps &
  Omit<CardMediaProps, 'image'> &
  Omit<TypographyProps, 'variant'> & {
    uid: itemProps['uid']
    images: itemProps['images'][]
    name: itemProps['name']
    price: itemProps['price'] | string
  }

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { className, uid, images, name, price } = props

  const router = useRouter()

  return (
    <Card className={className} onClick={() => router.push(uid)}>
      <CardMedia className="media" image={images[0].path} title="" />
      <CardContent className="content">
        <Typography className="item" variant="caption" color="textSecondary">
          {name}
        </Typography>
        <Typography className="price" color="error">
          ¥ {price}
        </Typography>
      </CardContent>
    </Card>
  )
}

const StyledComponent = styled(Component)`
  // PC 3カラム
  width: calc(100% / 3 - 30px);

  .media {
    height: 0;
    padding-top: 100%;
  }

  .content {
    text-align: left;
  }

  .item {
    padding-bottom .8rem;
    font-size: 1.6rem;
  }

  .price {
    font-size: 2rem;
  }

  // タブレット 2カラム
  @media screen and (max-width: 1024px) {
    width: calc(100% / 2 - 30px);
  }

  // スマホ 1カラム
  @media screen and (max-width: 599px) {
    width: calc(100% / 1 - 30px);
  }
`

const Container: React.VFC<ContainerProps> = (props) => {
  const images = props.images || [NoImage]
  const price = props.price.toLocaleString() // 3桁区切りの数値に変換

  const containerProps = { price, images }

  return <StyledComponent {...props} {...(containerProps as ContainerProps)} />
}

export default Container
