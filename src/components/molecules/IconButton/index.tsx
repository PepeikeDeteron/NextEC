import React from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'

type ContainerProps = {
  children: React.ReactNode
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.FC<Props> = (props) => {
  const { className, children } = props

  return (
    <IconButton className={className}>
      <label>{children}</label>
    </IconButton>
  )
}

const StyledComponent = styled(Component)`
  height: 4rem;
  width: 4rem;

  & .input {
    display: none;
  }
`

const Container: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default Container
