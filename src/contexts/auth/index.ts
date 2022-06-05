import { createContext } from 'react'
import { User } from '../../Providers/global'

interface AuthContextProps {
  login: (user: User) => boolean
  user: User | undefined
  logout: () => void
}

const AuthContext = createContext({} as AuthContextProps)

export default AuthContext
