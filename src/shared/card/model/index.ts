export interface Card {
    post: {
        id?: number;
        title?: string;
        body?: string;
        checked?: boolean;
        userId?: number;
        author?: string;
    }
}
