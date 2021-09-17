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
      <CardMedia />
      <CardContent>
        <Typography></Typography>
      </CardContent>
    </Card>
  );
};

const StyledComponent = styled(Component)`
  max-width: 35rem;
`;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
