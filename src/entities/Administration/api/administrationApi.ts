import { rtkApi } from '@/shared/api/rtkApi'
import { type Doctor, type AdministrationType } from '../types'
const workersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAdministration: build.query<AdministrationType[], null>({
      query: () => ({
        url: '/workers/adm'
      })
    }),
    getDoctors: build.query<Doctor[], null>({
      query: () => ({
        url: '/workers/doc'
      })
    })
  })
})

export const useGetAdministration = workersApi.useGetAdministrationQuery
export const useGetDoctors = workersApi.useGetDoctorsQuery
