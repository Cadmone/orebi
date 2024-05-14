import { configureStore } from '@reduxjs/toolkit'
import singleSlice from './assets/slice/singleSlice'



export default configureStore({
  reducer: {
    single:singleSlice
  },
})