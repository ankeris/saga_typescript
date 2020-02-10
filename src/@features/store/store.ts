import { createStore, applyMiddleware, combineReducers } from 'redux';
import { postsReducer, postSagas } from './posts';
import createSagaMiddleware from 'redux-saga'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || null;
const sagaMiddleware = createSagaMiddleware()

export default createStore(
    combineReducers({
        posts: postsReducer,
    }),
    composeEnhancers ? composeEnhancers(applyMiddleware(sagaMiddleware)) : applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(postSagas)

