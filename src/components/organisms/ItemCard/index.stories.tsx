import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import ItemCard from '.'

export default {
  title: 'components/organisms/ItemCard',
  components: ItemCard,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta

const Template: Story<ComponentProps<typeof ItemCard>> = (props) => (
  <ItemCard {...props} />
)

export const Default = Template.bind({})
Default.args = {
  name: '商品名',
  price: 10000000,
}
