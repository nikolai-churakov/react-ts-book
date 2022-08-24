import React from 'react';
import "./FindPage.css"
import {SearchBooks} from "../../components/SearchBooks/SearchBooks";

// import {Pagination} from "../../components/BookList/BookList";
// import {BooksList} from "../../components/BookList/BookList";

export const FindPage = () => {

    return (
        <div className={'FindPage'}>
            <SearchBooks/>
        </div>

        // <div className={'Pagination'}>
        //     <BooksList/>
        // </div>

        // <div className={'BookList'}>
        //     <BooksList/>
        // </div>
    );
}
