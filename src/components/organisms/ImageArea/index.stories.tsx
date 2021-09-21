import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import ImageArea from '.'

export default {
  title: 'components/organisms/ImageArea',
  components: ImageArea,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta

const Template: Story<ComponentProps<typeof ImageArea>> = (props) => (
  <ImageArea {...props} />
)

export const Default = Template.bind({})
