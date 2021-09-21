import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import RegisterButton from '.'

export default {
  title: 'components/molecules/RegisterButton',
  components: RegisterButton,
  argTypes: {
    color: {
      control: 'color',
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta

const Template: Story<ComponentProps<typeof RegisterButton>> = (props) => (
  <RegisterButton {...props} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Default',
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  label: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  label: 'Secondary',
}
