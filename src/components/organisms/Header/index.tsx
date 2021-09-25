import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  TypographyProps,
} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import MenuIcon from '@material-ui/icons/Menu'
import { RootState } from '@/features/store'
import { userProps } from '@/models/types'

type ContainerProps = Omit<TypographyProps, 'variant' | 'color'> & {
  userName?: userProps['username']
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { className, userName } = props

  const router = useRouter()

  return (
    <div className={className}>
      <AppBar className="app-bar">
        <Toolbar>
          <IconButton className="menu-button">
            <MenuIcon className="icon" />
          </IconButton>

          <Typography
            className="logo"
            variant="h4"
            color="textSecondary"
            noWrap
            onClick={() => router.push('/')}
          >
            <Box textAlign="left">NextEC</Box>
          </Typography>

          <div className="nav-tools">
            <Typography className="user-name">
              {`ユーザー名:  ${userName || 'ゲスト'} さん`}
            </Typography>

            <IconButton>
              <ShoppingCartIcon className="icon" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const StyledComponent = styled(Component)`
  flex-grow: 1;
  padding-bottom: 8rem;

  .nav-tools {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 auto;
  }

  .app-bar {
    background-color: #fff;
  }

  .logo {
    padding-left: 1.5rem;
    user-select: none;
  }

  .icon {
    font-size: 2.5rem;
  }

  .user-name {
    margin-right: 2rem;
    font-size: 1.5rem;

    // スマホ
    @media screen and (max-width: 599px) {
      margin-right: 1rem;
      font-size: 0.5rem;
    }
  }
`

const Container: React.VFC<ContainerProps> = () => {
  const userName = useSelector((state: RootState) => state.users.user.username)

  const containerProps = { userName }

  return <StyledComponent {...{ ...containerProps }} />
}

export default Container
