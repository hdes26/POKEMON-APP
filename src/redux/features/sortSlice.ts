import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedSection: 'name'
}
export const sortSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    selectName: (state) => {
      state.selectedSection = 'name'
    },
    selectNumber: (state) => {
      state.selectedSection = 'number'
    }
  }
})

export const { selectName, selectNumber } = sortSlice.actions

export default sortSlice.reducer