import {
  PUSH_TO_HISTORY,
  ADD_ITEM,
  REMOVE_ALL_ITEMS,
  REMOVE_ITEM
} from '../types'

const INITIAL_STATE = {
  orderItems: [],
  orderHistory: []
}

const OrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        orderItems: [...state.orderItems, action.payload]
      }
    case REMOVE_ITEM:
      // console.log(action.payload, 'action payload')
      return {
        ...state,
        orderItems: state.orderItems.filter(
          (item) => item.orderItemId !== action.payload
        )
      }
    case PUSH_TO_HISTORY:
      return {
        ...state,
        orderHistory: [...state.orderHistory, action.payload]
      }
    case REMOVE_ALL_ITEMS:
      return {
        ...state,
        orderItems: []
      }
    default:
      return state
  }
}

export default OrderReducer
