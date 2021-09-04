import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import TestButton from '.';

export default {
  title: 'components/atoms/TestButton',
  component: TestButton,
  argTypes: {
    color: {
      control: 'color',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof TestButton>> = (args) => (
  <TestButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  value: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  value: 'Secondary',
};
