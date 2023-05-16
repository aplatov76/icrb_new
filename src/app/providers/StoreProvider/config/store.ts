import {
  type CombinedState,
  configureStore,
  type DeepPartial,
  getDefaultMiddleware,
  type ReducersMapObject
} from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'
import { reducer as NavBarReducer } from '@/widgets/NavBar'
// import { $api } from '@/shared/api/api'
import { type Reducer } from 'react'
import { rtkApi } from '@/shared/api/rtkApi'
// import { rtkApi } from '@/shared/api/rtkApi'

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    navbar: NavBarReducer,
    // user: userReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    // @ts-ignore
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: _IS_DEV_,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            // api: $api
          }
        }
      }).concat(rtkApi.middleware)
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

// use it type for payload
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
