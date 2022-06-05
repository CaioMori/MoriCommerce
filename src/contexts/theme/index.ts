import { createContext } from 'react'

export type Theme = 'light' | 'dark'

export type ThemeContextProps = {
  theme: any
  name: Theme
  setTheme: (name: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps>({
  name: 'light',
  setTheme: () => {},
  theme: '',
} as ThemeContextProps)

export default ThemeContext
