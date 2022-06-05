import React from 'react'
import ThemeContext, { Theme } from '../../contexts/theme'
import { dark, light } from '../../themes'

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [name, setTheme] = React.useState<Theme>('light')

  const themes = {
    light,
    dark,
  }

  const theme = themes[name]

  const value = {
    name,
    setTheme,
    theme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
