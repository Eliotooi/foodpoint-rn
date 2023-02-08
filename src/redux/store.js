import { configureStore } from '@reduxjs/toolkit'
import createDebugger from 'redux-flipper'

import { rootReducer } from './reducers/rootReducer'

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createDebugger())
})
