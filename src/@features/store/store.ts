import { createStore, applyMiddleware, combineReducers } from 'redux';
import { postsReducer, postSagas } from './posts';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || null;
const sagaMiddleware = createSagaMiddleware()

export default createStore(
    combineReducers({
        posts: postsReducer,
        form: formReducer,
    }),
    composeEnhancers ? composeEnhancers(applyMiddleware(sagaMiddleware)) : applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(postSagas)

