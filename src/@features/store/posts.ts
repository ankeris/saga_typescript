import { ActionTypes, Action, State, Nullable, IGeneratorParams } from '../types/store.interface';
import { takeEvery, takeLatest, delay, put, call, all } from 'redux-saga/effects'
import PostService from '@/services/post.service';
import { IGetPostsParams, Post, IGetSinglePostParams } from '@/types/post.interface';
import { simpleApiGetter } from '@/utils/utils';

const initialState: State = {
    posts: null,
    isLoading: false,
    errorMessage: ""
};

export enum VALUES_ACTION_TYPES {
    GET_POSTS = "GET_POSTS",
    GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
    GET_POSTS_FAIL = "GET_POSTS_FAIL",
    GET_SINGLE_POST = "GET_SINGLE_POST",
    GET_SINGLE_POST_SUCCESS = "GET_SINGLE_POST_SUCCESS",
    GET_SINGLE_POST_FAIL = "GET_SINGLE_POST_FAIL",
}

export const valuesActions = {
    getPosts: (payload: IGetPostsParams) => ({ type: VALUES_ACTION_TYPES.GET_POSTS, payload }),
    setPosts: (payload: Array<Post>) => ({ type: VALUES_ACTION_TYPES.GET_POSTS_SUCCESS, payload }),
}

export function postsReducer(state: State = initialState, { type, payload }: Action) {
    switch (type) {
        case VALUES_ACTION_TYPES.GET_POSTS:
            return {
                ...state,
                errorMessage: "",
                isLoading: true
            }
        case VALUES_ACTION_TYPES.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: payload,
                isLoading: false
            }
        case VALUES_ACTION_TYPES.GET_POSTS_FAIL:
            return {
                ...state,
                errorMessage: payload,
                isLoading: false
            }
        default:
            return state
    }
}

function* getPosts({ payload }: IGeneratorParams<IGetPostsParams>) {
    yield delay(500);
    yield simpleApiGetter({
        successType: VALUES_ACTION_TYPES.GET_POSTS_SUCCESS,
        failType: VALUES_ACTION_TYPES.GET_POSTS_FAIL,
        apiCallBackFN: () => PostService.getPosts(payload),
    })
}

function* getSinglePost({ payload }: IGeneratorParams<IGetSinglePostParams>) {
    yield simpleApiGetter({
        successType: VALUES_ACTION_TYPES.GET_SINGLE_POST_SUCCESS,
        failType: VALUES_ACTION_TYPES.GET_SINGLE_POST_FAIL,
        apiCallBackFN: () => PostService.getPost(payload.id),
    })
}


export function* postSagas() {
    yield all([
        takeEvery(VALUES_ACTION_TYPES.GET_POSTS, getPosts),
        takeLatest(VALUES_ACTION_TYPES.GET_SINGLE_POST, getSinglePost)
    ])

}