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