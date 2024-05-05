import * as actionsTypes from './actionTypes'

export const addBook = (newBook) => {
  return {
    type: actionsTypes.ADD_BOOK,
    payload: newBook,
  }
}

export const deleteBook = (bookId) => {
  return {
    type: actionsTypes.DELETE_BOOK,
    payload: bookId,
  }
}

export const favoriteBook = (bookId) => {
  return {
    type: actionsTypes.TOGGLE_FAVORITE,
    payload: bookId,
  }
}
