import { useContext } from 'react'
import { Theme, ThemeContext } from './ThemeContext'

interface useThemeResultProps {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): useThemeResultProps => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  return { theme, toggleTheme }
}
