import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import SelectMenu from '.';

export default {
  title: 'components/atoms/SelectMenu',
  components: SelectMenu,
  argTypes: {
    onClick: {
      action: 'entered',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof SelectMenu>> = (props) => (
  <SelectMenu {...props} />
);

export const Default = Template.bind({});
Default.args = {
  options: [
    { type: 'aaa', name: 'ひらがな' },
    { type: 'bbb', name: 'カタカナﾅﾘ' },
    { type: 'ccc', name: '漢字' },
    { type: 'ddd', name: '0123456789' },
    { type: 'eee', name: 'Alphabet' },
    { type: 'fff', name: 'Ａｒｕｆａｂｅｔｔｏ' },
    { type: 'ggg', name: '한글' },
    { type: 'hhh', name: 'اللغة العربية' },
    { type: 'iii', name: '(´・ω・｀)' },
    { type: 'jjj', name: '🤪' },
  ],
};
