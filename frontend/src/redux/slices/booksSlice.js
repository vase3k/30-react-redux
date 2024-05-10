import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from '../../utils/createBookWithId'

const initialState = []

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload)
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload)
    },
    toogleFavorite: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite
        }
      })
    },
  },
})

export const { addBook, deleteBook, toogleFavorite } = booksSlice.actions

export const thunkFunction = async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:4000/random-book')
    if (res?.data?.title && res?.data?.author) {
      dispatch(addBook(createBookWithId(res.data, 'API')))
    }
  } catch (e) {
    console.log(e.message)
  }
}

export const selectBooks = (state) => state.books

export default booksSlice.reducer
