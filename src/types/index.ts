export interface BaseSelect {
    text: string;
    value: string;
}

export interface iBookList {
    totalItems: number;
    items: VolumeInfo[];
}

export interface VolumeInfo {
    title: string;
    authors: string;
    smallThumbnail: string;
}

