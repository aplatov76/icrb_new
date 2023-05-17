import { lazy } from 'react'

export const DoctorsPageAsync = lazy(async () => await import('./Doctors'))
