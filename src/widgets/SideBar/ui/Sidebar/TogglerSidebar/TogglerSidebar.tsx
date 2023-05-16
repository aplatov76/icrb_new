import { useActions } from '../../../../NavBar/model/slice/NavBar.slice'
import cls from './TogglerSidebar.module.sass'

export const TogglerSidebar = () => {
  const { toggle } = useActions()
  return (
    <div id="toggle" className="toggle" onClick={() => toggle()}>
      <label className={cls.navigation__button}>
        <span className={cls.navigation__icon}></span>
      </label>
    </div>
  )
}
