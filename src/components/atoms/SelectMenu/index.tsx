import React from 'react';
import styled from 'styled-components';
import {
  InputLabel,
  FormControl,
  FormControlProps,
  MenuItem,
  Select,
} from '@material-ui/core';

type ContainerProps = Omit<FormControlProps, 'variant'> & {
  label: string;
  value: string;
  set: (value: string) => void;
  options: {
    type: string;
    name: string;
  }[];
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const { className, label, required = true, value, set, options } = props;

  return (
    <FormControl variant="filled" className={className}>
      <InputLabel>{label}</InputLabel>
      <Select
        required={required}
        value={value}
        onChange={(event) => set(event.target.value as string)}
      >
        {options.map((option) => (
          <MenuItem key={option.type}>{option.name}</MenuItem>
        ))}
        ;
      </Select>
    </FormControl>
  );
};

const StyledComponent = styled(Component)`
  //TODO: Molecules にしてから微調整
  margin-bottom: 1rem;
  min-width: 10rem;
  width: 100%;
`;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
