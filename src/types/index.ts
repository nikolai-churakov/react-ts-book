export interface BaseSelect {
    text: string;
    value: string;
}

export interface iBookList {
    totalItems: number;
    book: number;

    items: [];
        volumeInfo: {};
            title: string;
            authors: string;
            smallThumbnail: string;
}