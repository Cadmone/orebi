import { createSlice } from '@reduxjs/toolkit'

export const singleSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    addtocart: (state) => {
      
      state.value += 1
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { addtocart } = singleSlice.actions

export default singleSlice.reducer