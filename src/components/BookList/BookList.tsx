import React, { useState } from 'react';
import "./BookList.css"
import {useSelector} from "react-redux";
import { BookList as IBookList } from '../../types'
import {RootReducer} from "../../store/rootReducer";

export const BookList = () => {
    const count: IBookList = useSelector((state: RootReducer) => state.booksItems)

    console.log(count)
    // console.log(count.books)
    // console.log(count.books[0].volumeInfo.title)

    if (count.totalBooks === 0) {
        return (
            <div className={'BookList'}>
                <h1>
                    Result listd
                </h1>
            </div>
        );
    }

    return (
    <div className={'BookList'}>
        <h1>
            Found {count.totalBooks} results
        </h1>

        <div className={'AllBooks'}>

            <div className={'Book'}>
                <div className={'Image'}
                     style={{
                         backgroundImage: `url(http://books.google.com/books/content?id=uvNfAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api)`
                }}></div>
                <span>{count.books[0].volumeInfo.authors[0]}</span>
                <span>{count.books[0].volumeInfo.title}</span>
            </div>

            <div className={'Book'}>
                <div className={'Image'}></div>
                <span>Marc Twen</span>
                <span>Name Book</span>
            </div>

            <div className={'Book'}>
                    <div className={'Image'}></div>
                    <span>Marc Twen</span>
                    <span>Name Book</span>
            </div>

            <div className={'Book'}>
                <div className={'Image'}></div>
                <span>Marc Twen</span>
                <span>Name Book</span>
            </div>

            <div className={'Book'}>
                <div className={'Image'}></div>
                <span>Marc Twen</span>
                <span>Name Book</span>
            </div>

            <div className={'Book'}>
                <div className={'Image'}></div>
                <span>Marc Twen</span>
                <span>Name Book</span>
            </div>

            <div className={'Book'}>
                <div className={'Image'}></div>
                <span>Marc Twen</span>
                <span>Name Book</span>
            </div>

            <div className={'Book'}>
                <div className={'Image'}></div>
                <span>Marc Twen</span>
                <span>Name Book</span>
            </div>

            <div className={'Book'}>
                <div className={'Image'}></div>
                <span>Marc Twen</span>
                <span>Name Book</span>
            </div>

            <div className={'Book'}>
                <div className={'Image'}></div>
                <span>Marc Twen</span>
                <span>Name Book</span>
            </div>

            <div className={'Book'}>
                <div className={'Image'}></div>
                <span>Marc Twen</span>
                <span>Name Book</span>
            </div>
        </div>
    </div>
    );
}

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