import { ActionTypes, Action, State, Nullable } from '../types/store.interface';
import { takeEvery, delay, put, call } from 'redux-saga/effects'
import PostService from '@/services/post.service';
import { IGetPostsParams } from '@/types/post.interface';

const initialState: State = {
    posts: null,
    isLoading: false,
    errorMessage: ""
};

export const VALUES_ACTION_TYPES: ActionTypes = {
    GET_POSTS: "GET_POSTS",
    GET_POSTS_SUCCESS: "GET_POSTS_SUCCESS",
    GET_POSTS_FAIL: "GET_POSTS_FAIL",
}

export const valuesActions = {
    getPosts: (payload: IGetPostsParams) => ({ type: VALUES_ACTION_TYPES.GET_POSTS, payload }),
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

function* getPosts({ payload }: any) {
    yield delay(500);
    const { data } = yield call(() => PostService.getPosts(payload));
    try {
        yield put({ type: 'GET_POSTS_SUCCESS', payload: data })
    } catch (error) {
        yield put({ type: "GET_POSTS_FAIL", payload: error })
    }
}

export function* postSagas() {
    console.log('Hello Sagas!')
    yield takeEvery(VALUES_ACTION_TYPES.GET_POSTS, getPosts)
}