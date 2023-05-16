import { useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/lib/classNames'
import { AppRouter } from './providers/router'
import { NavBar } from '@/widgets/NavBar'
import { SideBar } from '@/widgets/SideBar'
import 'app/styles/index.sass'
import 'bootstrap/scss/bootstrap.scss'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <SideBar />
      <div className="content-page">
        <NavBar />
        <AppRouter />
      </div>
    </div>
  )
}
