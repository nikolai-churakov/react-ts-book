export interface BaseSelect {
    text: string;
    value: string;
}

export interface iBookList {
    totalItems: number;
    book: number;
    items: VolumeInfo[];
}

export interface VolumeInfo {
    title: string;
    authors: string;
    smallThumbnail: string;
}

export interface store {
    totalItems: number;
    items: [];
}

export interface items {
    title: string;
    authors: string;
    smallThumbnail: string;
}