import { SET_SEARCH_TEXT } from '../types'

const INITIAL_STATE = {
  searchText: ''
}

const SearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      }
    default:
      return state
  }
}

export default SearchReducer
