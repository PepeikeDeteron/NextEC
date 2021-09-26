import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  TypographyProps,
} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { signOut as authSignOut } from '@firebase/auth'
import { signOut } from '@/features/user/userSlice'
import { RootState } from '@/features/store'
import { auth } from '@/lib/firebase'
import { drawerMenus } from '@/data/drawer'
import { userProps } from '@/models/types'

type ContainerProps = Omit<TypographyProps, 'variant' | 'color'> & {
  userName?: userProps['username']
  drawerOpen: boolean
  handleDrawerToggle: () => void
  handleSignOut: () => void
  handleSignIn: () => void
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const {
    className,
    userName,
    drawerOpen,
    handleDrawerToggle,
    handleSignOut,
    handleSignIn,
  } = props

  const router = useRouter()

  return (
    <div className={className}>
      <AppBar className="app-bar">
        <Toolbar>
          <IconButton className="menu-button" onClick={handleDrawerToggle}>
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
            <Typography className="user-name" onClick={handleSignIn}>
              {`ユーザー名:  ${userName || 'ゲスト'} さん`}
            </Typography>

            <IconButton>
              <ShoppingCartIcon className="icon" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        <List>
          {drawerMenus.map((menu) => (
            <ListItem button key={menu.id}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItem>
          ))}
          <ListItem button key="signout" onClick={handleSignOut}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="サインアウト" />
          </ListItem>
        </List>
      </Drawer>
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
      font-size: 0.8rem;
    }
  }
`

const Container: React.VFC<Partial<ContainerProps>> = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [drawerOpen, setDrawerOpen] = useState(false)

  const userName = useSelector((state: RootState) => state.users.user.username)

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen)

  const handleSignOut = async () => {
    authSignOut(auth)
    dispatch(signOut())

    router.push('/SignIn')
  }

  const handleSignIn = () => {
    if (!userName) router.push('/SignIn')
  }

  const containerProps = {
    userName,
    drawerOpen,
    setDrawerOpen,
    handleDrawerToggle,
    handleSignOut,
    handleSignIn,
  }

  return <StyledComponent {...{ ...containerProps }} />
}

export default Container
