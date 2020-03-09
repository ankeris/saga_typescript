import { Action, State, IGeneratorParams } from '../types/store.interface';
import { takeEvery, takeLatest, delay, all } from 'redux-saga/effects';
import PostService from '@/services/post.service';
import CommentService from '@/services/comment.service';
import { IGetPostsParams, Post, IGetSinglePostParams } from '@/types/post.interface';
import { simpleApiGetter } from '@/utils/utils';
import { IGetPostComments, Comment } from '@/types/comment.interface';

const initialState: State = {
    posts: null,
    currentPost: null,
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
    GET_POST_COMMENTS = "GET_POST_COMMENTS",
    GET_POST_COMMENTS_SUCCESS = "GET_POST_COMMENTS_SUCCESS",
    GET_POST_COMMENTS_FAIL = "GET_POST_COMMENTS_FAIL",
    ADD_COMMENT = "ADD_COMMENT",
    CLEAR_VALUE = "CLEAR_VALUE"
}

export const valuesActions = {
    getPosts: (payload: IGetPostsParams) => ({ type: VALUES_ACTION_TYPES.GET_POSTS, payload }),
    getSinglePost: (payload: IGetSinglePostParams) => ({ type: VALUES_ACTION_TYPES.GET_SINGLE_POST, payload }),
    getPostComments: (payload: IGetPostComments) => ({ type: VALUES_ACTION_TYPES.GET_POST_COMMENTS, payload }),
    addComment: (payload: Comment) => ({ type: VALUES_ACTION_TYPES.ADD_COMMENT, payload }),
    setPosts: (payload: Array<Post>) => ({ type: VALUES_ACTION_TYPES.GET_POSTS_SUCCESS, payload }),
    clearValue: (payload: string) => ({ type: VALUES_ACTION_TYPES.CLEAR_VALUE, payload })
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
        case VALUES_ACTION_TYPES.GET_SINGLE_POST:
            return {
                ...state,
                errorMessage: "",
                isLoading: true
            }
        case VALUES_ACTION_TYPES.GET_SINGLE_POST_SUCCESS:
            return {
                ...state,
                currentPost: payload,
                isLoading: false
            }
        case VALUES_ACTION_TYPES.GET_SINGLE_POST_FAIL:
            return {
                ...state,
                errorMessage: payload,
                isLoading: false
            }
        case VALUES_ACTION_TYPES.GET_POST_COMMENTS:
            return {
                ...state,
                // isLoading: true,
            }
        case VALUES_ACTION_TYPES.GET_POST_COMMENTS_SUCCESS:
            return {
                ...state,
                // isLoading: false
                currentPost: { ...state.currentPost, comments: payload }
            }
        case VALUES_ACTION_TYPES.GET_POST_COMMENTS_FAIL:
            return {
                ...state,
                currentPost: { ...state.currentPost, errorMessage: payload }
            }
        case VALUES_ACTION_TYPES.ADD_COMMENT:
            return {
                ...state,
                currentPost: { ...state.currentPost, comments: [payload, ...state.currentPost.comments] }
            }
        case VALUES_ACTION_TYPES.CLEAR_VALUE:
            return {
                ...state,
                [payload]: null
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

function* getPostComments({ payload }: IGeneratorParams<IGetPostComments>) {
    yield simpleApiGetter({
        successType: VALUES_ACTION_TYPES.GET_POST_COMMENTS_SUCCESS,
        failType: VALUES_ACTION_TYPES.GET_POST_COMMENTS_FAIL,
        apiCallBackFN: () => CommentService.getPostComments(payload.id),
    })
}

export function* postSagas() {
    yield all([
        takeEvery(VALUES_ACTION_TYPES.GET_POSTS, getPosts),
        takeLatest(VALUES_ACTION_TYPES.GET_SINGLE_POST, getSinglePost),
        takeLatest(VALUES_ACTION_TYPES.GET_POST_COMMENTS, getPostComments),
        takeEvery(VALUES_ACTION_TYPES.GET_SINGLE_POST_SUCCESS, getPostComments),
    ])

}