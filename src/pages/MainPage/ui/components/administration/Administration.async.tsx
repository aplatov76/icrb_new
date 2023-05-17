import { lazy } from 'react'

export const AdministrationPageAsync = lazy(async () => await import('./Administration'))
