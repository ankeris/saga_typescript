import { Nullable } from "@/types/store.interface";
import { IPagination } from "@/types/pagination.interface";
import { Comment } from '@/types/comment.interface'

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
    comments?: Array<Comment>
}

export interface IGetPostsParams extends IPagination {
}

export interface IGetSinglePostParams {
    id: number;
}