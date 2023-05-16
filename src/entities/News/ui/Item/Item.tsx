import { type ViewTogglerType } from '@/features/ViewToggler/'
import { classNames } from '@/shared/lib/classNames'
import { AppImage } from '@/shared/ui/AppImage/AppImage'
import { Link } from 'react-router-dom'
import { type News } from '../../models/types'
import cls from './Item.module.sass'

interface ItemNewsProps extends News {
  classname?: string
  view: ViewTogglerType
}

export const NewsItem = (props: ItemNewsProps) => {
  const { url, title, date, classname, text, view = 'line', preview, id } = props

  if (view === 'line') {
    return (
      <Link to={`/news/${id}`} className={classNames('d-flex p-2', {}, [cls.LineCard])}>
        <div className="d-flex justify-content-center align-items-center">
          <AppImage src={`https://crb29.ru/${url}`} classname={classNames(cls.img, {}, [cls.imgWidth])} alt={title} />
        </div>
        <div className={cls.LineBody}>
          <div className={classNames('card-title', {}, [cls.ItemTitle])}>{title}</div>
          <div className={classNames('card-description', {}, [cls.ItemDescription])}>{preview}</div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/news/${id}`} className={classNames(cls.NewsItem, {}, [classname])}>
      <div className={classNames('card', {}, [cls.Card])}>
        <div className="d-flex justify-content-center align-items-center">
          <AppImage src={`https://crb29.ru/${url}`} classname={cls.img} alt={title} />
        </div>
        <div className="card-body">
          <div className={classNames('card-title', {}, [cls.ItemTitle])}>{title}</div>
          <div className={classNames(cls.CardFoter, {}, ['card-text'])}>
            <div>
              <i className="fa fa-calendar"></i> {date}
            </div>
            <div>
              <i className="fa fa-user"></i> 12
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
