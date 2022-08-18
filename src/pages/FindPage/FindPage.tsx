import React from 'react';
import "./FindPage.css"
import {SearchBooks} from "../../components/SearchBooks/SearchBooks";

export const FindPage = () => {
    return (
        <div className={'FindPage'}>
            <SearchBooks></SearchBooks>
        </div>

        // <BooksList></BooksList>
    );
}
