import { useGetDoctors } from '@/entities/Administration/api/administrationApi'
import { type Doctor } from '@/entities/Administration/types'
import { EmptyData } from '@/shared/ui/EmptyData/EmptyData'
import { Skeleton } from '@/shared/ui/Skeleton'
import { HStack, VStack } from '@/shared/ui/Stack'
import cls from './Doctors.module.sass'

const DoctorItem = ({ doctor }: { doctor: Doctor }) => {
  return (
    <div className="col-lg-6 col-sm-12" style={{ marginBottom: '1rem' }}>
      <div className="card media blog-thumb" style={{ height: '100%' }}>
        <div className="media-body blog-info p-2">
          <h5>{doctor.name}</h5>
          <div className="scrollbar scrollbar-primary">
            <div className="force-overflow">
              <p>{doctor.info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const header = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Медицинские работники</h1>
        <p>
          <strong>ГБУЗ Архангельской области «Ильинская ЦРБ»</strong> имеет в своем составе центральную районную
          больницу и обособленные структурные подразделения: 3 амбулатории и 12 фельдшерско-акушерских пунктов.Суммарная
          мощность амбулаторно - поликлинические подразделений – 370 посещений в смену. Круглосуточный стационар в
          центральной районной больнице на 41 коек. Дневные стационары в поликлинике центральной районной больнице и
          амбулаториях на 12 пациенто-мест.
        </p>
      </div>
    </div>
  )
}

const Doctors = () => {
  const { data, isLoading } = useGetDoctors(null)

  if (isLoading) {
    return (
      <VStack gap={'12'} max classname="container">
        {header()}
        <HStack gap={'12'}>
          <Skeleton width={'50%'} border={'8px'} height={'180px'} classname={cls.skeleton} />
          <Skeleton width={'50%'} border={'8px'} height={'180px'} classname={cls.skeleton} />
        </HStack>
        <HStack gap={'12'}>
          <Skeleton width={'50%'} border={'8px'} height={'180px'} classname={cls.skeleton} />
          <Skeleton width={'50%'} border={'8px'} height={'180px'} classname={cls.skeleton} />
        </HStack>
        <HStack gap={'12'}>
          <Skeleton width={'50%'} border={'8px'} height={'180px'} classname={cls.skeleton} />
          <Skeleton width={'50%'} border={'8px'} height={'180px'} classname={cls.skeleton} />
        </HStack>
      </VStack>
    )
  }

  if (!data) {
    return <EmptyData />
  }
  return (
    <div className="page-heading">
      <div className="container">{header()}</div>
      <div className="container">
        <div className="row">
          {data.map((doctor: Doctor) => (
            <DoctorItem key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors
