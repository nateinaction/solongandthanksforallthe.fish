import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './store/newsReducer'

import logger from 'redux-logger'

const store = configureStore({
  reducer: newsReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
