import { classNames } from '@/shared/lib/classNames'
import cls from './General.module.sass'

interface GeneralProps {
  img?: string
  title?: string
}

export const General = (props: GeneralProps) => {
  return (
    <section className={classNames('left-image box', {}, [])}>
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <div className="p-4">
            <img src="" alt="Главный врач" />
          </div>
        </div>
        <div className="col-md-6 col-xs-12 p-4">
          <div className={cls.rightContent}>
            <div>
              <b>Полное наименование: </b>Государственное бюджетное учреждение здравоохранения Архангельской области
              «Ильинская центральная районная больница»
            </div>
            <div>
              <b>Краткое наименование: </b>ГБУЗ Архангельской области «Ильинская ЦРБ»
            </div>
            <div>
              <b>Адрес учреждения: </b>165680, Архангельская область, Вилегодский район, с. Ильинско-Подомское, ул.
              Госпитальная д. 14
            </div>
            <div>
              <b>Тел/факс: </b>(81843) 4-11-01
            </div>
            <div>
              <b>E-mail: </b>ilinskaya.crb@mail.ru
            </div>
            <div>
              <b>Учредитель: </b>Министерство здравоохранения Архангельской области
            </div>
            <div>
              <b>Кашенцев Леонид Евгеньевич </b>главный врач ГБУЗ Архангельской области &quot;Ильинская ЦРБ&quot;, врач
              организатор здравоохранения высшей квалификационной категории, заслуженный врач РФ, победитель
              Всероссийского конкурса врачей в номинации &quot;Лучший руководитель медицинской организации&quot; 2019
              год.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
