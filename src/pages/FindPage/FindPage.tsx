import React from 'react';
import "./FindPage.css"
import {SearchBooks} from "../../components/SearchBooks/SearchBooks";
import {BookList} from "../../components/BookList/BookList";
import {Pagination} from "../../components/Pagination/Pagination";

export const FindPage = () => {

    return (
        <div>
            <div className={'FindPage'}>
                <SearchBooks/>
            </div>
            <div className={'ListResult'}>
                <BookList/>
            </div>
            <div className={'Pagination'}>
                 <Pagination/>
             </div>
        </div>
    );
}
