import {
  SET_SEARCH_TEXT,
  REMOVE_ALL_ITEMS,
  SET_FILTER_TYPE,
  ADD_ITEM,
  REMOVE_ITEM,
  PUSH_TO_HISTORY
} from './types'

export const updateSearchText = (text) => {
  return {
    type: SET_SEARCH_TEXT,
    payload: text
  }
}

export const setFilterType = (text) => {
  return {
    type: SET_FILTER_TYPE,
    payload: text
  }
}

export const addOrderItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  }
}
export const removeOrderItem = (orderItemId) => {
  return {
    type: REMOVE_ITEM,
    payload: orderItemId
  }
}

export const pushToHistory = (item) => {
  return {
    type: PUSH_TO_HISTORY,
    payload: item
  }
}

export const removeAllItems = () => {
  return {
    type: REMOVE_ALL_ITEMS
  }
}
