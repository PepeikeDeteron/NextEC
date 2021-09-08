import React from 'react';
import styled from 'styled-components';

type ContainerProps = {
  children?: React.ReactNode;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.FC<Props> = (props) => {
  const { className } = props;

  return <div className={className}></div>;
};

const StyledComponent = styled(Component)`
  height: 32px;
`;

const Container: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
