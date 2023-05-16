import { Spinner } from '@/shared/ui/Spinner'
import { type ChangeEvent, useState } from 'react'
import { format } from 'date-fns'
import DatePicker from 'react-date-picker'
import { useGetShedule, useGetSpeciality } from './api/shedulerApi'
import { classNames } from '@/shared/lib/classNames'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import './Sheduler.css'

export const Sheduler = () => {
  /* Дата выбранная пользователем */
  const [day, setDay] = useState(new Date())
  /* Выбранная специальность */
  const [currentSpec, setCurrentSpec] = useState(null)
  /* Расписание */
  const { data, isLoading } = useGetShedule(format(day, 'yyyy-MM-dd'))
  const { data: speciality, isLoading: isSpecialityLoading } = useGetSpeciality(null)

  const hgd = (event: ChangeEvent<HTMLSelectElement>) => {
    const select = event.target.value
    setCurrentSpec(select)
  }

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner />
      </div>
    )
  }

  if (!data) {
    return <div>Данные отсутствуют</div>
  }

  return (
    <section className="right-image">
      <div className="container-fluid">
        <h1 className="hid-title">Расписание приема</h1>
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <select className="form-control" onChange={(event) => hgd(event)}>
              <option key="-1" id="0">
                Все специальности
              </option>
              {speciality &&
                !isSpecialityLoading &&
                speciality.map((el) =>
                  el.speciality_id === currentSpec ? (
                    <option selected key={el.speciality_id} id={el.speciality_id} value={el.speciality_id}>
                      {el.name}
                    </option>
                  ) : (
                    <option key={el.speciality_id} id={el.speciality_id} value={el.speciality_id}>
                      {el.name}
                    </option>
                  )
                )}
            </select>
          </div>
          <div className="col-md-4 col-xs-12">
            <DatePicker
              className={classNames('form-control', {}, [])}
              onChange={(event) => setDay(event as any)}
              format="yyyy-MM-dd"
              value={day}
            />
          </div>
          <div className="col-12">
            {' '}
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <td>Врач</td>
                  <td className="tr-media-hid">Направление</td>
                  <td className="tr-media-hid">Кабинет</td>
                  <td>Начало</td>
                  <td>Конец</td>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((item) => item.special === currentSpec || !currentSpec)
                  .map((el, key) => {
                    return (
                      <tr key={key}>
                        <td>{`${el.lastName} ${el.firstName} ${el.patrName}`}</td>
                        <td className="tr-media-hid">{el.rmSpec_title}</td>
                        <td className="tr-media-hid">{el.office ? el.office : '*'}</td>
                        <td>{el.begTime}</td>
                        <td>{el.endTime}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
