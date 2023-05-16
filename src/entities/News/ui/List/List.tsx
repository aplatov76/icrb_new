import { ViewToggler } from '@/features/ViewToggler'
import { classNames } from '@/shared/lib/classNames'
import { Skeleton } from '@/shared/ui/Skeleton'
import { HStack } from '@/shared/ui/Stack'
import { useGetNews } from '../../api/newsApi'
import { type ViewTogglerType } from '@/features/ViewToggler/types'
import { NewsItem } from '../Item/Item'
import cls from './List.module.sass'
import React, { useState } from 'react'

interface ListProps {
  classname?: string
}

export const NewsList = React.memo((props: ListProps) => {
  const { classname } = props
  const { data, isLoading } = useGetNews(null)

  const [currentView, setCurrentView] = useState<ViewTogglerType>('card')
  if (isLoading) {
    return (
      <HStack gap={'12'} max classname={classname}>
        <Skeleton width={'100%'} border={'8px'} height={'180px'} classname={cls.skeleton} />
        <Skeleton width={'100%'} border={'8px'} height={'180px'} classname={cls.skeleton} />
        <Skeleton width={'100%'} border={'8px'} height={'180px'} classname={cls.skeleton} />
      </HStack>
    )
  }

  return (
    <>
      <div className="row">
        <div
          className={classNames('d-flex justify-content-between mb-4', {}, [cls.toggler])}
          style={{ margin: '0 -1px' }}
        >
          <div className="h3">Новости</div>
          <ViewToggler current={currentView} change={setCurrentView} classname="pb-2" />
        </div>
      </div>

      <div className={classNames('row')}>
        {data?.map((news) => {
          return (
            <NewsItem
              classname="col-xs-12 col-md-3 col-lg-2 col-xl-2 col-xxl-2"
              key={news.id}
              id={news.id}
              url={news.url}
              title={news.title}
              preview={news.preview}
              description={news.description}
              date={news.date}
              view={currentView}
            />
          )
        })}
      </div>
    </>
  )
})
