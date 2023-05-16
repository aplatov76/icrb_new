import { rtkApi } from '@/shared/api/rtkApi'
import { type News } from '../models/types'

const newsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<News[], null>({
      query: () => ({
        url: '/news'
      })
    }),
    getNewsById: build.query<News, string>({
      query: (id: string) => ({
        url: '/news/id/' + id
      })
    })
  })
})

export const useGetNews = newsApi.useGetNewsQuery
export const useGetNewsById = newsApi.useGetNewsByIdQuery
