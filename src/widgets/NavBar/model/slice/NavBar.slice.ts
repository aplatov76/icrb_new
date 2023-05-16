import { buildSlice } from '@/shared/lib/store/buildSlice'
import { type NavBarSchema } from '../types'

const initialState: NavBarSchema = {
  sidebarToggler: false
}

export const NavBarSlice = buildSlice({
  name: 'navBarSlice',
  initialState,
  reducers: {
    toggle(state) {
      state.sidebarToggler = !state.sidebarToggler
    }
  }
})

export const { actions, reducer, useActions } = NavBarSlice
