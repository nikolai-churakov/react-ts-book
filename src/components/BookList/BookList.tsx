import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hook'
import { incrementTotalBooks, incrementByItemsArray } from '../../store/bookSlice'

export const BookList = () => {

    export function Counter() {
        // The `state` arg is correctly typed as `RootState` already
        const count = useAppSelector((state) => state.counter.value)
        const dispatch = useAppDispatch()


    return (
    // <ul>
    //     {handleButtonClick.data.volumeInfo.items.map(book => (
    //         <li key={book.id}>
    //             <div>
                    <div
                        style={{backgroundImage: `url()`}}
                    >
    //                 <span>Название книги</span>
    //                 <span>Автор</span>
    //
    //             </div>
    //
    //         </li>
    //     ))}
    // </ul>


// </div>

    );
};
