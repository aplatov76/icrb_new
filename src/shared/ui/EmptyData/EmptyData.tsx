import React from 'react'
import cls from './EmptyData.module.sass'

export const EmptyData = React.memo(({ text }: { text?: string }) => {
  return (
    <div className={cls.container404}>
      {...[...Array(40)].fill(undefined).map((_, index) => (
        <span key={index} className={cls.particle}>
          1
        </span>
      ))}
      {...[...Array(40)].fill(undefined).map((_, index) => (
        <span key={index} className={cls.particle}>
          0
        </span>
      ))}
      <div className={cls.content}>
        {text ? <p>{text}</p> : <p>Данных нет</p>}
        Сообщите о проблеме <strong>email@yandex.ru</strong>.
      </div>
    </div>
  )
})
