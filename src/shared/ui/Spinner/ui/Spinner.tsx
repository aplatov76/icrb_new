import { classNames } from '../../../lib/classNames'
import './Spinner.sass'

interface LoaderProps {
  className?: string
}

export const Spinner = ({ className }: LoaderProps) => (
  <div className={classNames('lds-ellipsis', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
)
