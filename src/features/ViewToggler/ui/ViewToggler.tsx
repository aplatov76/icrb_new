import cls from './ViewToggler.module.sass'
import ViewCozy from '@/shared/assets/icons/view_cozy.svg'
import EventList from '@/shared/assets/icons/event_list.svg'
import { classNames } from '@/shared/lib/classNames'
import { type ViewTogglerType } from '..'

interface ViewTogglerProps {
  classname?: string
  current: ViewTogglerType
  change: (view: ViewTogglerType) => void
}

export const ViewToggler = ({ classname, current, change }: ViewTogglerProps) => {
  return (
    <div className={classNames('d-flex gap-2', {}, [cls.ViewToggler, classname])}>
      <ViewCozy onClick={() => change('card')} />
      <EventList onClick={() => change('line')} />
    </div>
  )
}
