import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import ItemRegister from '.';

export default {
  title: 'components/organisms/ItemRegister',
  components: ItemRegister,
  argTypes: {
    onclick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof ItemRegister>> = (props) => (
  <ItemRegister {...props} />
);

export const Default = Template.bind({});
Default.args = {
  setCategory: [
    { type: 'beer_and_low-malt-beer', name: 'ビール・発泡酒' },
    { type: 'japanese-rice-wine', name: '日本酒' },
    { type: 'japanese-distilled-spirits', name: '焼酎' },
    { type: 'wine', name: 'ワイン' },
    { type: 'western-liquor', name: '洋酒' },
  ],
};
