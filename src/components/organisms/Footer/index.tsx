import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const Component: React.VFC<Props> = (props) => {
  const { className } = props

  return (
    <footer className={className}>
      <p>&copy; 2021 PepeikeDeteron</p>
    </footer>
  )
}

const StyledComponent = styled(Component)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0.5rem;
  font-size: 0.6rem;
  opacity: 0.65;
`

const Container: React.VFC = (props) => {
  return <StyledComponent {...props} />
}

export default Container
