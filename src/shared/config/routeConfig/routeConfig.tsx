import { DetailNews } from '@/entities/News'
import { AboutPage } from '@/pages/AboutPage'
import { MainPage, DoctorsPage, AdministrationPage, HistoryPage } from '@/pages/MainPage'
import { Sheduler } from '@/pages/MainPage/ui/components/sheduler/Sheduler'
import { NewsPage } from '@/pages/NewsPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ServiceFreePage, ServicePaidPage, ServicePayingPage, ServiceTypesPage } from '@/pages/Services'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
  MAIN = '',
  NEWS = 'news',
  SERVICES = 'services',
  MEDICAL_WORKERS = 'medical-workers',
  CLIENTS = 'clients',
  DOCUMENTS = 'documents',
  CORRUPTION = 'corruption',
  VACANSIES = 'vacansies',
  CONTACTS = 'contacts',
  NOT_FOUND = 'not_found'
}

export type RouteType = Omit<RouteProps, 'children'> & {
  name?: string
  onlyParent?: boolean
  children?: Array<{ path: string; name: string; element: JSX.Element }>
}

export type RouteConfig = Record<AppRoutes, RouteType>

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '',
  [AppRoutes.NEWS]: 'news',
  [AppRoutes.SERVICES]: 'services',
  [AppRoutes.MEDICAL_WORKERS]: 'medical-workers',
  [AppRoutes.CLIENTS]: 'medical-workers',
  [AppRoutes.DOCUMENTS]: 'documents',
  [AppRoutes.CORRUPTION]: 'corruption',
  [AppRoutes.VACANSIES]: 'vacansies',
  [AppRoutes.CONTACTS]: 'contacts',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: RouteConfig = {
  [AppRoutes.MAIN]: {
    name: 'Главная',
    path: AppRoutes.MAIN,
    element: <MainPage />,
    children: [
      {
        path: '',
        name: 'О больнице',
        element: <MainPage />
      },
      {
        path: 'schedule',
        name: 'Расписание приема',
        element: <Sheduler />
      },
      {
        path: 'administration',
        name: 'Администрация',
        element: <AdministrationPage />
      },
      {
        path: 'medworkers',
        name: 'Медицинские работники',
        element: <DoctorsPage />
      },
      {
        path: 'history',
        name: 'История',
        element: <HistoryPage />
      }
    ]
  },
  [AppRoutes.NEWS]: {
    name: 'Новости',
    path: 'news',
    element: <NewsPage />,
    onlyParent: true,
    children: [
      {
        name: null,
        path: ':id',
        element: <DetailNews />
      }
    ]
  },
  [AppRoutes.SERVICES]: {
    name: 'Услуги',
    path: 'services',
    element: <AboutPage />,
    children: [
      {
        path: 'type-medical',
        name: 'Виды и профили оказываемой медицинской помощи',
        element: <ServiceTypesPage />
      },
      {
        path: 'free-medical',
        name: 'Перечень предоставляемых бесплатных медицинских услуг',
        element: <ServiceFreePage />
      },
      {
        path: 'paid-medical',
        name: 'Перечень и цены на платные медицинские услуги',
        element: <ServicePaidPage />
      },
      {
        path: 'paying',
        name: 'Порядок оплаты медицинских услуг',
        element: <ServicePayingPage />
      }
    ]
  },
  [AppRoutes.MEDICAL_WORKERS]: {
    name: 'Врачам',
    path: AppRoutes.MEDICAL_WORKERS,
    element: <NotFoundPage />,
    children: [
      {
        path: 'rules',
        name: 'Порядки',
        element: <MainPage />
      },
      {
        path: 'standarts',
        name: 'Стандарты',
        element: <MainPage />
      }
    ]
  },
  [AppRoutes.CLIENTS]: {
    name: 'Пациентам',
    path: AppRoutes.CLIENTS,
    element: <NotFoundPage />,
    children: [
      {
        path: 'worktime',
        name: 'График работы',
        element: <MainPage />
      },
      {
        path: 'preparates',
        name: 'Лекарственные препараты и медицинские изделия',
        element: <MainPage />
      },
      {
        path: 'rules-for-diagnostic',
        name: 'О правилах подготовки к диагностическим исследованиям',
        element: <MainPage />
      },
      {
        path: 'online-reg`',
        name: 'О правилах записи на первичный прием',
        element: <MainPage />
      },
      {
        path: 'clinical-examination',
        name: 'Диспансеризация',
        element: <MainPage />
      },
      {
        path: 'nfp`',
        name: 'Профилактика',
        element: <MainPage />
      },
      {
        path: 'project-nfp`',
        name: 'Проект "Шаг на встречу"',
        element: <MainPage />
      }
    ]
  },
  [AppRoutes.DOCUMENTS]: {
    name: 'Документы',
    path: AppRoutes.DOCUMENTS,
    children: [
      {
        path: 'legal-framework`',
        name: 'Правовая база',
        element: <MainPage />
      },
      {
        path: 'insurance-companies`',
        name: 'Страховые медицинские организации',
        element: <MainPage />
      },
      {
        path: 'providing-free`',
        name: 'Порядок предоставления бесплатных медицинских услуг',
        element: <MainPage />
      },
      {
        path: 'provisions`',
        name: 'Положения о порядке и условиях предоставления платных медицинских услуг',
        element: <MainPage />
      },
      {
        path: 'responsibility`',
        name: 'Права и обязанности граждан в сфере здравоохранения',
        element: <MainPage />
      }
    ]
  },
  [AppRoutes.CORRUPTION]: {
    name: 'Коррупция',
    path: RoutePath[AppRoutes.CORRUPTION],
    element: <NotFoundPage />
  },
  [AppRoutes.VACANSIES]: {
    name: 'Вакансии',
    path: RoutePath[AppRoutes.VACANSIES],
    element: <NotFoundPage />
  },
  [AppRoutes.CONTACTS]: {
    name: 'Контакты',
    path: RoutePath[AppRoutes.CONTACTS],
    element: <NotFoundPage />,
    children: [
      {
        path: 'contacts`',
        name: 'Контактная информация',
        element: <MainPage />
      },
      {
        path: 'offices`',
        name: 'Подразделения',
        element: <MainPage />
      },
      {
        path: 'https://zdrav29.ru`',
        name: 'Регистратура онлайн',
        element: <MainPage />
      },
      {
        path: 'regulator`',
        name: 'Контролирующие органы',
        element: <MainPage />
      }
    ]
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />
  }
}
