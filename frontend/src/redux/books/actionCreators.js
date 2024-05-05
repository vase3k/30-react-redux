import * as actionsTypes from './actionTypes'

export const addBook = (newBook) => {
  return {
    type: actionsTypes.ADD_BOOK,
    payload: newBook,
  }
}