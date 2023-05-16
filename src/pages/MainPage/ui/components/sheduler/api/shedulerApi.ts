import { rtkApi } from '@/shared/api/rtkApi'

type SpecialityType = { speciality_id: string; name: string }
type SheduleType = {
  lastName: string
  firstName: string
  patrName: string
  begTime: string
  endTime: string
  special: string | number
  rmSpec_title: string | number
  office: number | null
}

const shedulerApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getShedule: build.query<SheduleType[], string>({
      query: (data) => ({
        url: data ? '/schedule/date/' + data : '/schedule'
      })
    }),
    getSpeciality: build.query<SpecialityType[], null>({
      query: () => ({
        url: '/schedule/speciality',
        method: 'POST'
      })
    })
  })
})

export const useGetShedule = shedulerApi.useGetSheduleQuery
export const useGetSpeciality = shedulerApi.useGetSpecialityQuery
