import { Routes, Route } from 'react-router-dom'
import { routeConfig } from '@/shared/config/routeConfig/routeConfig'
import { Suspense } from 'react'
import { PageLoader } from '@/widgets/PageLoader'

const makeRoutes = (el: any): any => {
  return Object.values(el).map((route: any) =>
    !route?.children ? (
      route.path === '' ? (
        <Route key={route.path} path={route.path} element={<div className="page-wrapper">{route.element}</div>} />
      ) : (
        <Route
          key={route.path}
          path={route.path}
          index={false}
          element={<div className="page-wrapper">{route.element}</div>}
        />
      )
    ) : (
      <Route key={route.path} path={route.path}>
        <Route index={true} element={<div className="page-wrapper">{route.element}</div>} />
        {...makeRoutes(route.children)}
      </Route>
    )
  )
}
// element={<div className="page-wrapper">{route.element}</div>}

const AppRouter = () => {
  const t = makeRoutes(routeConfig)
  console.log(t)

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{...t}</Routes>
    </Suspense>
  )
}

/*
<Route index element={<div className="page-wrapper">123 main</div>} />
        <Route path="news">
          <Route index={true} element={<div className="page-wrapper">123 news index</div>} />
          <Route index={false} path=":id" element={<div className="page-wrapper">123 news child</div>} />
        </Route>
        <Route path="*" element={<div>other</div>} />
*/

export default AppRouter
