import React from 'react';
import "./FindPage.css"
import {SearchBooks} from "../../components/SearchBooks/SearchBooks";

export const FindPage = () => {

    // const redux = require('redux')
    // const initialState = {
    //     counter: 0
    // }
    //
    // //Reducer
    // const reducer = (state=initialState, action:any) => {
    //
    //     if (action.type === 'ADD') {
    //         return {
    //             counter: state.counter + 1
    //         }
    //     }
    //     return state
    // }
    //
    // // Store
    // const store = redux.createSrote(reducer)
    //
    // //Actions
    // const addCounter = {
    //     type: 'ADD'
    // }

    return (
        <div className={'FindPage'}>
            <SearchBooks></SearchBooks>
        </div>

        // <BooksList></BooksList>
    );
}
