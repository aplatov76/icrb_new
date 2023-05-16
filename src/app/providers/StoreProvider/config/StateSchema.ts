import {
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type NavBarSchema } from '@/widgets/NavBar/'
import { rtkApi } from '@/shared/api/rtkApi'
// import { rtkApi } from '@/shared/api/rtkApi'

export interface StateSchema {
  navbar: NavBarSchema
  // user: UserSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // Асинхронные редюсеры
  // loginForm?: LoginSchema
}
export type StateSchemaKey = keyof StateSchema
export type MountedReducers = Partial<Record<StateSchemaKey, boolean>>

export interface ReduceManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
  getMountedReducers: () => Partial<Record<StateSchemaKey, boolean>>
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReduceManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
