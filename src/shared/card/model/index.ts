export interface Card {
    post: {
        id?: number;
        title?: string;
        image?: string;
        body?: string;
        checked?: boolean;
        userId?: number;
        author?: string;
    }
}
