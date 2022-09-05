export interface BaseSelect {
    text: string;
    value: string;
}

export interface BookList {
    books: Book[];
    totalBooks: number;
}

export interface Book {
    volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
    title: string;
    authors: string[];
    smallThumbnail: string;
    Thumbnail: string;
}