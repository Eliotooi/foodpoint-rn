import { SET_FILTER_TYPE } from '../types'

const INITIAL_STATE = {
  filterTypeText: ''
}

const FilterTypeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILTER_TYPE:
      return {
        ...state,
        filterTypeText: action.payload
      }
    default:
      return state
  }
}

export default FilterTypeReducer
