import React from 'react';
import "./BookList.css"
import {useSelector} from "react-redux";
import {BookList as IBookList} from '../../types'
import {RootReducer} from "../../store/rootReducer";

export const BookList = () => {

    const count: IBookList = useSelector((state: RootReducer) => state.booksItems)

    if (count.totalBooks === 0) {
        return (
            <div className={'BookList'}>
                {/*<h1>*/}
                {/*    Result list*/}
                {/*</h1>*/}
            </div>
        );
    }

        return (
            <div className={'BookList'}>
                <h1> Found {count.totalBooks} results </h1>
                <div className={'whiteLineHr'}></div>
                <div className={'AllBooks'}>
                    {count.books.map((book, index) =>
                        <div key={index} className={'Book'}>
                            <div className={'Image'}
                                 style={{
                                     backgroundImage: `url(${count.books[index].volumeInfo.imageLinks.thumbnail || count.books[index].volumeInfo.imageLinks.smallThumbnail})`
                                 }}>
                            </div>
                            <div className={'categoriesDiv'}>{count.books[index].volumeInfo.categories}</div>
                            <span>{count.books[index].volumeInfo.authors}</span>
                            <span>{count.books[index].volumeInfo.title}</span>
                        </div>
                    )}
                </div>

                <div className={'whiteLineHr'}></div>
                <h1> Found {count.totalBooks} results </h1>

            </div>
        )
    }