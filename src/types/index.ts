import {useState} from "react";

export interface BaseSelect {
    text: string;
    value: string;
}

export interface BookList {
    books: Book[];
    totalBooks: number;
}

export interface Request {
    getSearch: string;
    selectedTheme: string;
    sortedResult: string;
    startIndex: 0;
}

export interface Book {
    volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
    title: string;
    authors: string[];
    categories: string[];
    imageLinks: ImageLinks
}

export interface ImageLinks {
    thumbnail: string;
    smallThumbnail: string;
}
