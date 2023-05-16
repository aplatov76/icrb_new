import { classNames } from '@/shared/lib/classNames'
import { AppLink } from '@/shared/ui/'
import { TogglerSidebar } from '../../../SideBar/ui/Sidebar/TogglerSidebar/TogglerSidebar'
import cls from './NavBar.module.sass'

interface NavBarPropsInterface {
  className?: string
}

export const NavBar = ({ className = 'navbar' }: NavBarPropsInterface) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}></div>
    </div>
  )
}
