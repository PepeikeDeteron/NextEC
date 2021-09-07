import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import styled from 'styled-components';

type ContainerProps = Omit<TextFieldProps, 'margin' | 'autoComplete'>;

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const {
    fullWidth = true,
    multiline = false,
    required = true,
    rows = 1,
    ...others
  } = props;

  return (
    <TextField
      margin="dense"
      autoComplete="off"
      fullWidth={fullWidth}
      multiline={multiline}
      required={required}
      rows={rows}
      {...others}
    />
  );
};

const StyledComponent = styled(Component)``;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
