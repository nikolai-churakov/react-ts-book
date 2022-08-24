import React, {useCallback, useState, Fragment} from 'react';
import "./SearchBooks.css"
import {Input} from "../UI/Input/Input";
import {Button} from "../UI/Button/Button";
import {Select} from "../UI/Select/Select";
import axios from "axios";
import {RootState} from "../../store/store";
import {useSelector, useDispatch} from 'react-redux'
import {incrementTotalBooks, incrementByItemsArray} from '../../store/bookSlice'

export const SearchBooks = () => {

    interface iBookList {
        totalItems: number;
        volumeInfo: string;
            title: string;
            authors: string;
    }

    const dispatch = useDispatch()

    const [books, setBookList] = useState<iBookList[]>([]);

    const [getSearch, setSearch] = useState("Mark Twain")
    const [selectedTheme, setSelectedTheme] = useState("all")
    const [sortedResult, setSortedResult] = useState("relevance")

    const themes = [
        {text: 'all', value: 'all'},
        {text: 'art', value: 'art'},
        {text: 'biography', value: 'biography'},
        {text: 'computers', value: 'computers'},
        {text: 'history', value: 'history'},
        {text: 'medical', value: 'medical'},
        {text: 'poetry', value: 'poetry'},
    ]

    const handleSearch = useCallback((event: any) => {
        console.log(111, event.target.value)

        setSearch(event.target.value)
    }, [])

    const handleSelectThemeChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTheme(event.target.value)
    }, [])

    const handleSortResultChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortedResult(event.target.value)
    }, [])

    const findRequest = `https://www.googleapis.com/books/v1/volumes?q=${getSearch}+${selectedTheme}+${sortedResult}+`;

    const getRequest = () => {
        axios.get(findRequest)
        .then((response) => {
            console.log(1, response.data);

            // dispatch(addBooks(response.data))
            setBookList(response.data.tot);

            dispatch(incrementTotalBooks(response.data))

            // const books = []
            // Object.keys(response.data).forEach((key,index) => {
            //    books.push({
            //        id: key,
            //        Name: key
            //    })
            // })

            return setBookList;
        })
            .catch(error => console.log('Response server error'))
    }


    const handleButtonClick = useCallback(async () => {
        console.log('Clicked')

        // console.log([getSearch, setSearch], [selectedTheme, setSelectedTheme], [sortedResult, setSortedResult])
        // console.log(`https://www.googleapis.com/books/v1/volumes?q=+${getSearch}+${selectedTheme}+${sortedResult}`)
        // data -> redux state;
        await getRequest()

    }, [getSearch, selectedTheme, sortedResult])

    return (
        <div className={'SearchBooks'}>
            <h1>Find you books</h1>
            <div className={'SearchDiv'}>
                <Input
                    value={getSearch}
                    onChange={handleSearch}
                />
                <Button onClick={handleButtonClick}/>
            </div>

            <div className={'SortWrapper'}>
                <div className={'SortDiv'}>
                    <span className={'SpanNameInput'}>Categories</span>
                    <Select
                        label="Выберите тему"
                        value={selectedTheme}
                        onChange={handleSelectThemeChange}
                        options={themes}
                    />
                </div>

                <div className={'SortDiv'}>
                    <span className={'SpanNameInput'}>Sort by</span>
                    <Select
                        label="Сортировка результатов"
                        value={sortedResult}
                        onChange={handleSortResultChange}
                        options={[
                            {text: 'relevance', value: 'relevance'},
                            {text: 'newest', value: 'newest'}
                        ]}
                    />
                </div>

            </div>
            <Fragment>
            </Fragment>
        </div>
    );
}
