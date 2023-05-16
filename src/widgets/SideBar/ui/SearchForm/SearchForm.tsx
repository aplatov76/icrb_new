import cls from './SearchForm.module.sass'
import { classNames } from '@/shared/lib/classNames'

export const SearchForm = () => {
  return (
    <section id="search" className={classNames(cls.Search, {}, ['alt'])}>
      <form method="get" action="#">
        <input type="text" name="search" id="search" placeholder="Search..." />
      </form>
    </section>
  )
}
