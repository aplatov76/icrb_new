import { useTheme } from '@/app/providers/ThemeProvider'
import { type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames'
import ThemeLightIcon from '@/shared/assets/icons/theme-light.svg'
import ThemeDarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { Button } from '@/shared/ui'

interface ThemeSwitcherProps {
  className?: string
  children?: ReactNode
}

export const ThemeSwitcher = ({ className, children }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button>
      {theme === 'dark' ? (
        <ThemeLightIcon className={classNames(className)} onClick={toggleTheme} />
      ) : (
        <ThemeDarkIcon className={classNames(className)} onClick={toggleTheme} />
      )}
    </Button>
  )
}
