export type ColorProps = 'primary' | 'secondary' | 'inherit'

export type userProps = {
  isSignedIn: boolean
  role: string
  uid: string
  username: string
}

export type imageProps = {
  id: string
  path: string
}

export type itemProps = {
  uid: string
  images: any // imageProps
  name: string
  description: string
  category: string
  capacity: number
  number: number
  price: number
}
