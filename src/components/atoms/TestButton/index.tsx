import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { ColorProps } from '@/models/types';

type Props = {
  color?: ColorProps;
  value: string;
};

const StyledTestButton = styled(Button)`
  border-radius: 10px;
  color: white;
  height: 48px;
`;

const TestButton: React.FC<Props> = (props) => {
  const { color, value } = props;

  return (
    <>
      <StyledTestButton variant="contained" color={color}>
        {value}
      </StyledTestButton>
    </>
  );
};

export default TestButton;
