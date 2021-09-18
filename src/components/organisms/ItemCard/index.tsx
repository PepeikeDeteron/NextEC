import React from 'react';
import styled from 'styled-components';
import {
  Card,
  CardProps,
  CardContent,
  CardContentProps,
  CardMedia,
  CardMediaProps,
  Typography,
  TypographyProps,
} from '@material-ui/core';
import NoImage from '../../../assets/no-image.jpg';
import { imageProps, itemProps } from '@/models/types';

type ContainerProps = CardProps &
  CardContentProps &
  Omit<CardMediaProps, 'image'> &
  Omit<TypographyProps, 'variant'> & {
    images: imageProps[];
    name: itemProps['name'];
    price: itemProps['price'] | string;
  };

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const { className, images, name, price } = props;

  return (
    <Card className={className}>
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
  );
};

const StyledComponent = styled(Component)`
  // PC 3カラム
  width: calc(100% / 3 - 30px);
  min-height: 40rem;
  margin: 0 auto;

  .media {
    height: 0;
    padding-top: 100%;
  }

  .content {
    padding: 16px 10px;
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
    min-height: 45rem;
  }

  // スマホ 1カラム
  @media screen and (max-width: 599px) {
    width: calc(100% / 1 - 30px);
    min-height: 35rem;
  }
`;

const Container: React.VFC<ContainerProps> = (props) => {
  const images = props.images.length > 0 ? props.images : [{ path: NoImage }];
  const price = props.price.toLocaleString(); // 3桁区切りの数値に変換

  const containerProps = { images, price };

  return <StyledComponent {...{ ...(containerProps as ContainerProps) }} />;
};

export default Container;
