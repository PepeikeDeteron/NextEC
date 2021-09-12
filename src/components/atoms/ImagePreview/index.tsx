import React from 'react';
import styled from 'styled-components';
import { imageProps } from '@/models/types';

type ContainerProps = {
  image: imageProps;
  onDelete: (id: imageProps['id']) => void;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const { className, image, onDelete } = props;

  return (
    <button className={className} onClick={() => onDelete(image.id)}>
      <img src={image.path} alt="商品画像" />
    </button>
  );
};

const StyledComponent = styled(Component)``;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
