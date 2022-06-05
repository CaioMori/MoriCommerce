import { createContext } from 'react'
import { Cart, User } from '../../Providers/global'

interface GlobalContextProps {
  user: User
  setUser: (user: User) => void
  cart: Cart | null
  setCart: (cart: Cart) => void
}

const GlobalContext = createContext({} as GlobalContextProps)

export default GlobalContext
