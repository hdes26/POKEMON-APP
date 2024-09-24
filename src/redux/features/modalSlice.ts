import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active: false
}
export const modalSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    active: (state) => {
      state.active = !state.active
    }
  }
})

export const { active } = modalSlice.actions

export default modalSlice.reducer