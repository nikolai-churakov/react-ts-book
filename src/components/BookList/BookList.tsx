import React, { useState } from 'react';
// import { useAppSelector, useAppDispatch } from '../../hook'
// import { incrementTotalBooks, incrementByItemsArray } from '../../store/bookSlice'
import {useSelector} from "react-redux";
import { BookList as IBookList } from '../../types'
import {RootReducer} from "../../store/rootReducer";

export const BookList = () => {
    const count: IBookList = useSelector((state: RootReducer) => state.booksItems)


    console.log(count)

    if (count.totalBooks === 0) {
        return <div>Her</div>
    }

    return <div>Hot HER</div>
    // export function Counter() {
        // The `state` arg is correctly typed as `RootState` already
        // const count = useAppSelector((state) => state.totalItems)
        // const dispatch = useAppDispatch()


//     return (
//     // <ul>
//     //     {handleButtonClick.data.volumeInfo.items.map(book => (
//     //         <li key={book.id}>
//     //             <div>
//                     <div
//                         style={{backgroundImage: `url()`}}
//                     >
//     {/*//                 <span>Название книги</span>*/}
//     {/*//                 <span>Автор</span>*/}
//     Not HER
//     //             </div>
//     //
//     //         </li>
//     //     ))}
//     // </ul>
//
//
// // </div>

    // );
}