import { ActionTypes, Action, Actions, State } from '../types/store.interface';

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

export const valuesActions: Actions = {
    getPersonValues: (payload) => ({type: VALUES_ACTION_TYPES.GET_PERSON, payload}),
}

export function valuesReducer(state: State = initialState, {type, payload}: Action) {
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
                personValues: payload,
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
