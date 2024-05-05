import * as actionsTypes from './actionTypes'

const initialState = []

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_BOOK:
      return [...state, action.payload]
    default:
      return state
  }
}

export default booksReducer