import { useGetAdministration } from '@/entities/Administration'
import { type AdministrationType } from '@/entities/Administration/types'
import { EmptyData } from '@/shared/ui/EmptyData/EmptyData'
import { Skeleton } from '@/shared/ui/Skeleton'
import { HStack } from '@/shared/ui/Stack'
import cls from './Administration.module.sass'

const Administration = () => {
  const { data, isLoading } = useGetAdministration(null)

  if (isLoading) {
    return (
      <HStack gap={'12'} max>
        <Skeleton width={'100%'} border={'8px'} height={'180px'} classname={cls.skeleton} />
        <Skeleton width={'100%'} border={'8px'} height={'180px'} classname={cls.skeleton} />
        <Skeleton width={'100%'} border={'8px'} height={'180px'} classname={cls.skeleton} />
      </HStack>
    )
  }

  if (!data) {
    return <EmptyData />
  }
  return (
    <div className="page-heading">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Администрация</h1>
            <p>
              <strong>ГБУЗ Архангельской области «Ильинская ЦРБ»</strong> имеет в своем составе центральную районную
              больницу и обособленные структурные подразделения: 3 амбулатории и 12 фельдшерско-акушерских
              пунктов.Суммарная мощность амбулаторно - поликлинические подразделений – 370 посещений в смену.
              Круглосуточный стационар в центральной районной больнице на 41 коек. Дневные стационары в поликлинике
              центральной районной больнице и амбулаториях на 12 пациенто-мест.
            </p>
          </div>
        </div>
        {data.map((worker: AdministrationType) => (
          <div className="row" key={worker.id}>
            <div className="col-12">
              <div className="m-2 box box-left">
                <h6>
                  {worker.email && (
                    <span>
                      <i className="fa fa-globe"></i> {worker.email}
                    </span>
                  )}
                  {worker.time && (
                    <span>
                      <i className="fa fa-clock-o"></i> {worker.time}
                    </span>
                  )}
                </h6>
                <div className={cls.DetailLine}>
                  {worker.phone && (
                    <span>
                      <i className="fa fa-phone"></i> {worker.phone}
                    </span>
                  )}
                  {worker.address && (
                    <span>
                      <i className="fa fa-map-marker"></i> Кабинет № {worker.address}
                    </span>
                  )}
                </div>

                <h3>{worker.name}</h3>
                {worker.info && <h6>{worker.info}</h6>}
                {worker.time && <p>Прием граждан по личным вопросам по средам с {worker.time}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Administration
