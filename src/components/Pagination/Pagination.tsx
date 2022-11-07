import React from 'react';
import "./Pagination.css"
import {useSelector} from "react-redux";
import {BookList as IBookList} from '../../types'
import {RootReducer} from "../../store/rootReducer";

export const Pagination = () => {

    const pageNumber = []

    const count: IBookList = useSelector((state: RootReducer) => state.booksItems)
    const PaginationIndex = Math.ceil(count.totalBooks / 10);
    console.log('total page pagination', PaginationIndex)

    for (let i= 1; i <= PaginationIndex; i++) {
        pageNumber.push(i)
    }

    if (count.totalBooks === 0) {
        return (
            <div/>
        );
    }

    return (
            <div className={'pagination'}>
                {
                    pageNumber.map(number => (
                        <div className={'pageItem'} key={number}>
                            <a href={'!!!'} className={'pageLink'}>
                                {number}
                            </a>
                        </div>
                    ))
                }
            </div>
    )
}