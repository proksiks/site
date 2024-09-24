export interface Post {
    id: number;
    title: string;
    body: string;
    checked: boolean;
    userId: number;
    author?: string;
    name: string;
}