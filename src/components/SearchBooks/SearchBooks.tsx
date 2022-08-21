import React, {useCallback, useState} from 'react';
import "./SearchBooks.css"
import {Button} from "../UI/Button/Button";
import {Select} from "../UI/Select/Select";

export const SearchBooks = () => {

const [selectedTheme, setSelectedTheme] = useState("all")
const [sortedResult, setSortedResult] = useState("all")

const themes = [
    {text: 'all', value: 'all'},
    {text: 'art', value: 'art'},
    {text: 'biography', value: 'biography'},
    {text: 'computers', value: 'computers'},
    {text: 'history', value: 'history'},
    {text: 'medical', value: 'medical'},
    {text: 'poetry', value: 'poetry'},
]

const handleSelectThemeChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTheme(event.target.value)
}, [])

const handleSortResultChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortedResult(event.target.value)
}, [])

const handleButtonClick = useCallback(() => {
    console.log(111)
    // axios. `qweqweqw ${selectedTheme} qweqeqwe ${sortedResult}`
    // data -> redux state;
}, [selectedTheme, sortedResult])

return (
    <div className={'SearchBooks'}>
        <h1>Find you books</h1>
        <div className={'SearchDiv'}>
            <input className={'inputFind'}/>
            <Button onClick={handleButtonClick}>Find</Button>
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
    </div>
);
}
