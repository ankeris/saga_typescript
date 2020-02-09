import { ActionTypes, Action, Actions, State } from '../types/store.interface';
import ValuesService from '../services/post.service';
import { ofType, Epic, combineEpics } from 'redux-observable';
import { mergeMap, catchError, flatMap } from 'rxjs/operators';
import { of } from 'rxjs';

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

export const getPersonValues: Epic = (action$) => action$.pipe(
    ofType(VALUES_ACTION_TYPES.GET_PERSON),
    flatMap(({payload}) => {
        return valuesService.getPerson(payload || '').pipe(
            flatMap(({data}) => of(
                {type: VALUES_ACTION_TYPES.GET_PERSON_SUCCESS, payload: data},
                {type: VALUES_ACTION_TYPES.GET_FACILITY}
            )),
            catchError(() => of({type: VALUES_ACTION_TYPES.GET_PERSON_FAIL, payload: "error retrieving person values"})),
        )
    }),
)

export const VALUES_EPICS = combineEpics(
    getPersonValues,
);
