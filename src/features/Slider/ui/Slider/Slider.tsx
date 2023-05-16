import { classNames } from '@/shared/lib/classNames'
import { useEffect, useState } from 'react'
import cls from './Slider.module.sass'

type Slide = {
  img: string
  title?: string
  description?: string
  colorArrow?: string
}

interface SliderProps {
  classname?: string
  slides?: Slide[]
  interval?: number
}

const mock = [
  {
    img: 'https://crb29.ru/assets/images/main-slider/upload_d7a5bc485a657d5aa97e212a74bb68af',
    title: 'Заголовок верхнего уровня 1',
    colorArrow: '#24252d',
    description:
      'Вызов медицинского работника на дом Вызов врача: 4-11-02 с 8:00 до 12:00 в рабочее дни по телефону 4-11-02. За пределами рабочего времени и в выходные и праздничные дни - вызов скорой медицинской помощи по тел. 4-12-03, 8(921)4961006, 03, 112'
  },
  {
    img: 'https://crb29.ru/assets/images/main-slider/upload_36efafd663e8bdc1b06f8e61377af9ab',
    title: 'Заголовок верхнего уровня 2',
    description:
      'Уважаемые жители Вилегодского района! Напоминаем, что: Сохраняется требование о соблюдении масочного режима и социальной дистанции при посещении поликлиники, врачебных амбулаторий и фельдшерско-акушерских пунктов ГБУЗ Архангельской области «Ильинская ЦРБ». (Указ губернатора архангельской области от 17 марта 2020 года N 28-у «О введении на территории Архангельской области режима повышенной готовности для органов управления и сил Архангельской территориальной подсистемы единой государственной системы предупреждения и ликвидации чрезвычайных ситуаций и мерах по противодействию распространению на территории Архангельской области новой коронавирусной инфекции (COVID-2019)»)'
  }
]

export const Slider = (props: SliderProps) => {
  const { classname, slides = mock, interval = 100000 } = props
  const [stopSliderTime, setStopSliderTime] = useState(interval)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setActive((state) => (state === slides.length - 1 ? 0 : state + 1))
    }, stopSliderTime)
    return () => window.clearTimeout(t)
  }, [stopSliderTime])

  const toLeft = () => {
    setActive((state) => (state > 0 ? state - 1 : slides.length - 1))
    pauseSlider()
  }

  const toRight = () => {
    setActive((state) => (state === slides.length - 1 ? 0 : state + 1))
    pauseSlider()
  }

  const pauseSlider = () => {
    setStopSliderTime(60000)
    setTimeout(() => {
      setStopSliderTime(interval)
    }, 60000)
  }

  return (
    <div className={classNames(classname, {}, [cls.main])}>
      <div className={classNames(cls.wrapper)}>
        {slides?.map((slide, index) => (
          <>
            <img
              key={slide.img}
              src={slide.img}
              alt={slide.title}
              className={classNames(
                cls.currentImg,
                { [cls.active]: index === active, [cls.prevImg]: index === active - 1 },
                [classname]
              )}
            />
            {slide.title && (
              <div className={classNames(cls.title, { 'd-none': index !== active }, [cls.textWrapper])}>
                {slide.title}
              </div>
            )}
            {slide.description && (
              <div className={classNames(cls.description, { 'd-none': index !== active }, [cls.textWrapper])}>
                {slide.description}
              </div>
            )}
          </>
        ))}
        <div className={classNames(cls.arrow, {}, [cls.arrow__left])} onClick={toLeft}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30">
            <polygon points="20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30" transform="rotate(180 10 15)"></polygon>
          </svg>
        </div>
        <div className={classNames(cls.arrow, {}, [cls.arrow__right])} onClick={toRight}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30">
            <polygon points="20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30" transform="rotate(0 10 15)"></polygon>
          </svg>
        </div>
      </div>
    </div>
  )
}
