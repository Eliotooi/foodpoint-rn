import { createSelector } from '@reduxjs/toolkit'

export const searchTextSelector = (state) => state.search.searchText

export const typeSelector = (state) => state.type.filterTypeText

export const orderItemsSelector = (state) => state.order.orderItems

export const historySelector = (state) => state.order.orderHistory

export const totalSelector = createSelector(
  orderItemsSelector,
  (state) => state.reduce((acc, curr) => acc + Number(curr.price), 0)
)
