import React from 'react';
import styled from 'styled-components';
import {
  Card,
  CardProps,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

type ContainerProps = CardProps;

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const { className } = props;

  return (
    <Card className={className}>
      <CardMedia className="media" title="" />
      <CardContent className="content">
        <Typography className="item" color="textSecondary">
          商品名 商品名 商品名
        </Typography>
        <Typography className="price" color="error">
          ¥ 00000
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
  return <StyledComponent {...props} />;
};

export default Container;
