import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createSagaMiddleware from '@redux-saga/core'
import { countWathcher } from '../saga/countSaga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
   cash: cashReducer,
   customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)), applyMiddleware(sagaMiddleware))

sagaMiddleware.run(countWathcher)