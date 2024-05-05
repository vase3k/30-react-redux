import * as actionsTypes from './actionTypes'

const initialState = []

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_BOOK:
      return [...state, action.payload]

    case actionsTypes.DELETE_BOOK:
      return state.filter((item) => item.id !== action.payload)

    case actionsTypes.TOGGLE_FAVORITE:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, isFavorite: !item.isFavorite }
          : item
      )

    default:
      return state
  }
}

export default booksReducer
