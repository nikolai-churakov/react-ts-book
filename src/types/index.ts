export interface BaseSelect {
    text: string;
    value: string;
}

export interface BookList {
    books: Book[];
    totalBooks: number;
}

export interface Book {
    volumeInfo: volumeInfo[];
    title: string;
}

export interface volumeInfo {
    title: string;
    authors: string;
    smallThumbnail: string;
    Thumbnail: string;
}



