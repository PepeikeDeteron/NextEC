import React from 'react';
import styled from 'styled-components';
import { Button, ButtonProps } from '@material-ui/core';
import { ColorProps } from '@/models/types';

type ContainerProps = Omit<ButtonProps, 'variant'> & {
  color: ColorProps;
  label: string;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const { label, ...restProps } = props;

  return (
    <Button variant="contained" {...restProps}>
      {label}
    </Button>
  );
};

const StyledComponent = styled(Component)`
  width: 20rem;
  height: 4rem;
  font-size: 1.5rem;
  color: white;
`;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default React.memo(Container);
