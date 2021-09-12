import React from 'react';
import styled from 'styled-components';
import { AddPhotoAlternate } from '@material-ui/icons';
import IconButton from '@/components/atoms/IconButton';
import { imageProps } from '@/models/types';

type ContainerProps = {
  images?: imageProps[];
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = () => {
  return (
    <>
      <div className={'image'}>{/* ここに画像を表示させる */}</div>
      <div className={'text'}>
        <span>商品を登録する</span>
        {/* 押すと画像アップロード用のダイアログが開く */}
        <IconButton>
          <AddPhotoAlternate />
          <input
            className={'input'}
            type="file"
            id="image"
            onClick={() => console.log('icon button')}
          />
        </IconButton>
      </div>
    </>
  );
};

const StyledComponent = styled(Component)`
  & .image {
    display: flex;
    flex-flow: wrap;
  }

  & .text {
    text-align: center;
  }
`;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
