import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {BookList} from "../types"

const initialState: BookList = {
  books: [],
  totalBooks: 0,
}

export const bookSlice = createSlice({
  name: 'booksAPI',
  initialState,
  reducers: {
    addBooksToState: (state, action: PayloadAction<BookList>) => {
      state.books = [...action.payload.books];
      state.totalBooks = action.payload.totalBooks;
    },
  },
})

export const {addBooksToState} = bookSlice.actions
export const booksReducer = bookSlice.reducer
