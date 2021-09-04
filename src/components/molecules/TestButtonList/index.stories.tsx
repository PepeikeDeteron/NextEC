import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import TestButtonList from '.';

export default {
  title: 'components/molecules/TestButtonList',
  component: TestButtonList,
  argTypes: {
    color: {
      control: 'color',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof TestButtonList>> = (args) => (
  <TestButtonList {...args} />
);

export const Default = Template.bind({});
