import React from 'react';
import styled from 'styled-components';
import { TextField, TextFieldProps } from '@material-ui/core';

type ContainerProps = Omit<
  TextFieldProps,
  'margin' | 'autoComplete' | 'variant'
>;

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const {
    fullWidth = true,
    multiline = false,
    required = true,
    rows = 1,
    ...restProps
  } = props;

  return (
    <TextField
      margin="dense"
      autoComplete="off"
      variant="filled"
      fullWidth={fullWidth}
      multiline={multiline}
      required={required}
      rows={rows}
      {...restProps}
    />
  );
};

const StyledComponent = styled(Component)``;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default React.memo(Container);
