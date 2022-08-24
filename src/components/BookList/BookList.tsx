import React, {useCallback, useState, FC, Fragment} from 'react';
import {iBookList} from "../../types";
import {SearchBooks} from "../SearchBooks/SearchBooks";



export const BookList: React.FC<iBookList> = (items) => {


    return (
    // <ul>
    //     {handleButtonClick.data.volumeInfo.items.map(book => (
    //         <li key={book.id}>
    //             <div>
                    <div
                        style={{backgroundImage: `url(${book.id.smallThumbnail}`)}}

                    />
    //                 <span>{book.title}</span>
    //                 <span>{book.authors}</span>
    //
    //             </div>
    //
    //         </li>
    //     ))}
    // </ul>


// </div>

    );
};
