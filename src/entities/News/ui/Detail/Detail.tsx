import { NotFoundPage } from '@/pages/NotFoundPage'
import { Skeleton } from '@/shared/ui/Skeleton'
import { HStack, VStack } from '@/shared/ui/Stack'
import { useParams } from 'react-router-dom'
import { useGetNewsById } from '../../api/newsApi'
import cls from './Detail.module.sass'

export const DetailNews = () => {
  const { id } = useParams()

  if (!id) {
    return <NotFoundPage />
  }

  const { data, isLoading } = useGetNewsById(id)

  if (isLoading) {
    return (
      <VStack gap={'12'} max classname={cls.DetailsSceleton}>
        <Skeleton width={'100%'} border={'8px'} height={'30px'} classname={cls.skeleton} />
        <HStack>
          <Skeleton width={'96px'} border={'8px'} height={'96px'} classname={cls.skeleton} />
          <Skeleton width={'100%'} border={'8px'} height={'96px'} classname={cls.skeleton} />
        </HStack>
        <HStack>
          <Skeleton width={'100%'} border={'8px'} height={'96px'} classname={cls.skeleton} />
          <Skeleton width={'96px'} border={'8px'} height={'96px'} classname={cls.skeleton} />
        </HStack>
        <Skeleton width={'100%'} border={'8px'} height={'180px'} classname={cls.skeleton} />
      </VStack>
    )
  }

  if (!data) {
    return <div>Данных по новости нет</div>
  }

  return (
    <section className="simple-post">
      <div className="container-fluid">
        <div className="row box box-left">
          <div className="col-md-12">
            <div className="left-content">
              <div dangerouslySetInnerHTML={{ __html: data?.text }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
