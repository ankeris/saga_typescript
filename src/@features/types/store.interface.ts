export type Nullable<T> = T | null;

export interface State {
    [FIELD: string]: any
}

export interface ActionTypes {
    [ACTION_NAME: string]: string
}

/* @param T   */
export interface Action<P = any> {
    type: string;
    payload?: P;
}
