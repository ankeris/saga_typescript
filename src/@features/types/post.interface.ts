import { Nullable } from "./store.interface";
import { IPagination } from "./pagination.interface";

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IGetPostsParams extends IPagination {
}

export interface IGetSinglePostParams {
    id: number;
}