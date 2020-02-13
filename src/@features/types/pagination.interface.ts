import { Nullable } from "./store.interface";

export interface IPagination {
    limit: number;
    pageNumber: Nullable<number>;
}