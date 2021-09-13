import React from 'react';
import styled from 'styled-components';
import {
  InputLabel,
  FormControl,
  FormControlProps,
  MenuItem,
  Select,
} from '@material-ui/core';
import { CategoryProps } from '@/data/category';

type ContainerProps = Omit<FormControlProps, 'variant'> & {
  label: string;
  value: string | undefined;
  set: (value: React.SetStateAction<string>) => void;
  options: CategoryProps[];
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const { className, label, required = true, value, set, options } = props;

  return (
    <FormControl variant="filled" required className={className}>
      <InputLabel>{label}</InputLabel>
      <Select
        required={required}
        value={value ?? ''}
        onChange={(event) => set(event.target.value as string)}
      >
        {options.map((option) => (
          <MenuItem key={option.type} value={option.type}>
            {option.name}
          </MenuItem>
        ))}
        ;
      </Select>
    </FormControl>
  );
};

const StyledComponent = styled(Component)`
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
  min-width: 10rem;
  width: 100%;
`;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
