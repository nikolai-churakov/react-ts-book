import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {iBookList} from '../types/index'
import type { RootState } from './store'

// Define the initial state using that type
const initialState: iBookList = {
    totalItems: 0,
    items: []
}

export const counterSlice  = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.totalItems += action.payload
        },
    },
})
export const { incrementByAmount } = counterSlice.actions

export const ItemsSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByItems: (state, action: PayloadAction<number>) => {
            state.totalItems += action.payload
        },
    },
})
export const { incrementByItems } = ItemsSlice.actions


// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

// export default counterSlice.reducer