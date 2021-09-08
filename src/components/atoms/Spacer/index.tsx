import React from 'react';
import styled from 'styled-components';

export type SpacerValue = 2 | 4 | 8 | 16 | 32 | 64 | 128;

type ContainerProps = {
  width?: SpacerValue;
  height?: SpacerValue;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.FC<Props> = (props) => {
  const { className, width = 0, height = 0 } = props;

  return (
    <div className={className}>
      <span
        style={{
          display: 'inline-block',
          width: width,
          height: height,
        }}
      />
    </div>
  );
};

const StyledComponent = styled(Component)``;

const Container: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
