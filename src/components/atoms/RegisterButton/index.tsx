import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { ColorProps } from '@/models/types';

type ContainerProps = {
  color: ColorProps;
  label: string;
  onClick: () => void;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const { label, ...others } = props;

  return (
    <Button variant="contained" {...others}>
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

export default Container;
