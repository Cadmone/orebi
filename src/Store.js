import { configureStore } from '@reduxjs/toolkit'
import { singleSlice } from './components/slice/SingleSlice'

export default configureStore({
  reducer: {
    single:singleSlice
  },
})