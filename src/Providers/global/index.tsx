import React from 'react'
import { ImageSourcePropType } from 'react-native'
import GlobalContext from '../../contexts/global'

interface GlobalProviderProps {
  children: React.ReactNode
}

export interface User {
  name: string
  email: string
  password: string
}

export interface Cart {
  products: Product[]
}

export interface Product {
  text: string
  price: number
  image: ImageSourcePropType
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [user, setUser] = React.useState<User>({ name: 'Caio', email: '', password: '' })
  const [cart, setCart] = React.useState<Cart | null>(null)

  const value = {
    user,
    setUser,
    cart,
    setCart,
  }

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

export default GlobalProvider
