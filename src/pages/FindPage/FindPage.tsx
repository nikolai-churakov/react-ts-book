import React from 'react';
import "./FindPage.css"
import {SearchBooks} from "../../components/SearchBooks/SearchBooks";
import { BookList } from "../../components/BookList/BookList";


// import {Pagination} from "../../components/BookList/BookList";


export const FindPage = () => {

    return (
        <div>
            <div className={'FindPage'}>
                <SearchBooks/>
            </div>

            {/*// <div className={'Pagination'}>*/}

            {/*//     <BooksList/>*/}

            {/*// </div>*/}

            <div className={'ListResult'}>
                <BookList/>
            </div>
        </div>
    );
}
