import { configureStore } from '@reduxjs/toolkit'
import searchSlice from '../features/filter/searchSlice'

export default configureStore({
  reducer: searchSlice
})