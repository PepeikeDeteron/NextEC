import React from 'react';
import styled from 'styled-components';
import { imageProps } from '@/models/types';

type ContainerProps = {
  id: imageProps['id'];
  path: imageProps['path'];
  onDelete: (id: imageProps['id']) => Promise<unknown>;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const { className, id, path, onDelete } = props;

  return (
    <div className={className} onClick={() => onDelete(id)}>
      <img src={path} alt="商品画像" />
    </div>
  );
};

const StyledComponent = styled(Component)`
  position: relative;
  overflow: hidden;
  width: 100%;

  > img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: auto;
  }
`;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
