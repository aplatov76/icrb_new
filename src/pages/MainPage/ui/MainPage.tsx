import { Slider } from '@/features/Slider/ui/Slider/Slider'
import { General } from './components/general/General'
import cls from './Main.module.sass'

const MainPage = () => {
  return (
    <div className="container-fluid">
      <Slider classname={cls.slideHeight} />
      <General />
    </div>
  )
}

export default MainPage
