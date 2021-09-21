import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import TextField from '.'

export default {
  title: 'components/molecules/TextField',
  components: TextField,
  argTypes: {
    onClick: {
      action: 'entered',
    },
  },
} as Meta

const Template: Story<ComponentProps<typeof TextField>> = (props) => (
  <TextField {...props} />
)

export const Default = Template.bind({})
Default.args = {}
