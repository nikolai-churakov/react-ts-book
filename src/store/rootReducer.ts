import {combineReducers} from "redux";
import {booksReducer} from "./bookSlice";

export const rootReducer = combineReducers({
    booksItems: booksReducer,
})

export type RootReducer = ReturnType<typeof rootReducer>