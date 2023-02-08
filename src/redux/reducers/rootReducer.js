import { combineReducers } from 'redux'

import SearchReducer from './searchReducer'
import FilterTypeReducer from './filterTypeReducer'
import OrderReducer from './orderReducer'

export const rootReducer = combineReducers({
  search: SearchReducer,
  type: FilterTypeReducer,
  order: OrderReducer
})
