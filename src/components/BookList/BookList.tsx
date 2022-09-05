import React, { useState } from 'react';
import "./BookList.css"
import {useSelector} from "react-redux";
import { BookList as IBookList } from '../../types'
import {RootReducer} from "../../store/rootReducer";

export const BookList = () => {
    const count: IBookList = useSelector((state: RootReducer) => state.booksItems)

    console.log(count.books)
    console.log(count.books.length)

    if (count.totalBooks === 0) {
        return (
            <div className={'BookList'}>
                <h1>
                    Result list
                </h1>
            </div>
        );
    }

    for (let i = 1; i < 3; i++) {

        return (
            <div className={'BookList'}>
                <h1> Found {count.totalBooks} results </h1>
                <div className={'AllBooks'}>
                    <div className={'Book'}>
                        <div className={'Image'}
                             style={{
                                 backgroundImage: `url(${count.books[i].volumeInfo.imageLinks.thumbnail})`
                             }}>
                        </div>
                        <span>{count.books[i].volumeInfo.authors[0]}</span>
                        <span>{count.books[i].volumeInfo.title}</span>
                    </div>
                </div>
            </div>
        )
    }
}

//
// {/*<div className={'Book'}>*/}
// {/*    <div className={'Image'}*/}
// {/*         style={{*/}
// {/*             backgroundImage: `url(${count.books[0].volumeInfo.imageLinks.thumbnail})`*/}
// {/*    }}></div>*/}
// {/*    <span>{count.books[0].volumeInfo.authors[0]}</span>*/}
// {/*    <span>{count.books[0].volumeInfo.title}</span>*/}
// {/*</div>*/}
//
// {/*<div className={'Book'}>*/}
// {/*    <div className={'Image'}*/}
// {/*         style={{*/}
// {/*             backgroundImage: `url(${count.books[1].volumeInfo.imageLinks.thumbnail})`*/}
// {/*         }}></div>*/}
// {/*    <span>{count.books[1].volumeInfo.authors[0]}</span>*/}
// {/*    <span>{count.books[1].volumeInfo.title}</span>*/}
// {/*</div>*/}
//
// {/*<div className={'Book'}>*/}
// {/*    <div className={'Image'}*/}
// {/*         style={{*/}
// {/*             backgroundImage: `url(${count.books[2].volumeInfo.imageLinks.thumbnail})`*/}
// {/*         }}></div>*/}
// {/*    <span>{count.books[2].volumeInfo.authors[0]}</span>*/}
// {/*    <span>{count.books[2].volumeInfo.title}</span>*/}
// {/*</div>*/}
//
// {/*<div className={'Book'}>*/}
// {/*    <div className={'Image'}*/}
// {/*         style={{*/}
// {/*             backgroundImage: `url(${count.books[3].volumeInfo.imageLinks.thumbnail})`*/}
// {/*         }}></div>*/}
// {/*    <span>{count.books[3].volumeInfo.authors[3]}</span>*/}
// {/*    <span>{count.books[3].volumeInfo.title}</span>*/}
// {/*</div>*/}

// {/* export function Counter() {*/}
// {/*        The `state` arg is correctly typed as `RootState` already*/}
// {/*        const count = useAppSelector((state) => state.totalItems)*/}
// {/*        const dispatch = useAppDispatch()*/}
//
// {/*    return (*/}
// {/*    <ul>*/}
// {/*        {handleButtonClick.data.volumeInfo.items.map(book => (*/}
// {/*            <li key={book.id}>*/}
// {/*                <div>*/}
// {/*                    <div*/}
// {/*                        style={{backgroundImage: `url()`}}*/}
// {/*                    >*/}
// {/*    //                 <span>Название книги</span>*/}
// {/*    //                 <span>Автор</span>*/}
// {/*    Not HER*/}
// {/*                </div>*/}
//
// {/*            </li>*/}
// {/*        ))}*/}
// {/*    </ul>*/}
//
//
// {/*</div>*/}
//
// {/*    );*/}