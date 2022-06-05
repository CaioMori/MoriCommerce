import React, { useState } from 'react'
import { Alert } from 'react-native'
import AuthContext from '../../contexts/auth'
import { User } from '../global'

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()

  const login = (value: User) => {
    if (value.email === 'caio@mori.dev' && value.password === '123456') {
      value.name = 'Caio Mori'
      setUser(value)

      return true
    } else {
      return false
    }
  }

  const logout = () => {
    setUser(undefined)
    Alert.alert('Logout', 'Você saiu do app')
  }

  const value = {
    user,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
