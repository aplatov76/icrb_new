import { memo, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { routeConfig, type RouteType } from '@/shared/config/routeConfig/routeConfig'
import { classNames } from '@/shared/lib/classNames'
import { type ActiveLink, type OwlType } from '@/widgets/SideBar/types/sidebar'
import { SearchForm } from '../SearchForm/SearchForm'
import { SideBarFooter } from '../SideBarFooter/SideBarFooter'
import cls from './SideBar.module.sass'
import { useSelector } from 'react-redux'
import { navBarSelector } from '@/widgets/NavBar/model/selectors/selectors'
import { TogglerSidebar } from './TogglerSidebar/TogglerSidebar'

const owlData: OwlType[] = [
  {
    url: 'https://gosuslugi.ru',
    src: '/assets/images/gos.jpg',
    title: 'Портал государственных услуг Российской Федерации.',
    active: true
  },
  {
    url: 'https://kapmed.ru/',
    src: '/assets/images/capital.jpg',
    title: 'Капитал - медицинское страхование.'
  },
  {
    url: 'https://www.sogaz-med.ru/',
    src: '/assets/images/sogaz-med.jpg',
    title: 'Обязательное медицинское страхование.'
  },
  {
    url: 'https://minzdrav.gov.ru/open/supervision/format',
    src: '/assets/images/nkm.jpg',
    title: 'Независимая оценка качества условий оказания услуг медицинскими организациями.'
  },
  {
    url: 'http://zdorovie29.ru',
    src: '/assets/images/arh-med-prof.jpg',
    title: 'Архангельский областной центр медицинской профилактики.'
  }
]

const buildMenu = (routes: RouteType[]) => {
  const [active, setActive] = useState<ActiveLink>({ name: '', collapse: false })

  return routes.map((route) => (
    <li key={route.path}>
      {route.children?.length === 0 || !route.children || route.onlyParent ? (
        <Link to={route.path}>{route.name}</Link>
      ) : (
        <span
          className={classNames('opener', { active: route.name === active.name && active.collapse })}
          onClick={() =>
            setActive((state) => ({ name: route.name, collapse: route.name === state.name ? !state.collapse : true }))
          }
        >
          {route.name}
        </span>
      )}
      {route.children?.length > 0 && <ul>{buildMenu(route.children)}</ul>}
    </li>
  ))
}

const buildMiniSlider = () => {
  const [owlList, setOwlList] = useState(owlData)

  const changeOwlItem = (id: number) => {
    setOwlList(owlList.map((el, index) => (index === id ? { ...el, active: true } : { ...el, active: false })))
  }

  return (
    <div className="featured-posts">
      <div className="heading">
        <div className={cls.owlHeading}>
          <div>
            <h2>Популярные сервисы</h2>
          </div>
          <div className="owl-dots">
            {owlList.map((el, id) => (
              <button
                role="button"
                key={id}
                className={classNames('owl-dot', { active: el.active }, [])}
                onClick={() => changeOwlItem(id)}
              >
                <span></span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="owl-carousel owl-theme owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div className="owl-stage">
            {owlList.map((el) => (
              <div className={classNames('owl-item', { active: el.active })} key={el.src}>
                <a href={el.url}>
                  <div className="featured-item">
                    <img src={el.src} alt="featured one" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const SideBar = memo(() => {
  const { sidebarToggler } = useSelector(navBarSelector)

  const menuRoutes = Object.values(routeConfig).filter((route) => Boolean(route.name))
  const sideBarMenu = useCallback(() => buildMenu(menuRoutes), [])()
  const slider = useCallback(() => buildMiniSlider(), [])()
  return (
    <div className={classNames(cls.SideBar, { inactive: sidebarToggler })} id="sidebar">
      <div className="inner">
        {<SearchForm />}
        <nav id="menu">
          <ul>{sideBarMenu}</ul>
        </nav>
        <div className="owl-carousel owl-theme owl-loaded owl-drag">{slider}</div>
        {<SideBarFooter />}
      </div>
      <TogglerSidebar />
    </div>
  )
})
