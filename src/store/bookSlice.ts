import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from './store'

// Define a type for the slice state
interface IState {
    totalItems: number;
    books: [];
}
interface books {
    title: string;
    authors: string;
    smallThumbnail: string;
}

// Define the initial state using that type
const initialState: IState = {
    totalItems: 0,
    books: []
}

export const totalItemsSlice = createSlice({
    name: 'totalItems',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.totalItems += action.payload
        },
    },
})
export const { incrementByAmount } = totalItemsSlice.actions

export const BooksItemsSlice = createSlice({
    name: 'BooksItems',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByBooksItems: (state, action: PayloadAction<number>) => {
            state.totalItems += action.payload
        },
    },
})
export const { incrementByBooksItems } = BooksItemsSlice.actions





// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

// export default counterSlice.reducer