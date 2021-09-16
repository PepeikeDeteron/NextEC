import React from 'react';
import styled from 'styled-components';
import { imageProps } from '@/models/types';

type ContainerProps = {
  id: imageProps['id'];
  path: imageProps['path'];
  onDelete: (id: imageProps['id']) => void;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  return (
    <button className="image" onClick={() => props.onDelete(props.id)}>
      <img src={props.path} alt="商品画像" />
    </button>
  );
};

const StyledComponent = styled(Component)`
  .image {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .image::before {
    content: "",
    display: block;
    padding-top: 100%;
  }

  .image > img {
    position: absolute;
    object-fit: cover;
    object-position: center;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }
`;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
