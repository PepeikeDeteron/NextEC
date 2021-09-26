import PersonIcon from '@material-ui/icons/Person'
import HistoryIcon from '@material-ui/icons/History'
import FormatListBulletedIcon from '@material-ui/icons/FormatListNumbered'

export type DrawerProps = {
  id: string
  label: string
  icon: JSX.Element
}

export const drawerMenus: DrawerProps[] = [
  {
    id: 'profile',
    label: 'アカウントサービス',
    icon: <PersonIcon />,
  },
  {
    id: 'history',
    label: '注文履歴',
    icon: <HistoryIcon />,
  },
  {
    id: 'list',
    label: '欲しい物リスト',
    icon: <FormatListBulletedIcon />,
  },
]
