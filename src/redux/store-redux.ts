import {applyMiddleware, combineReducers, createStore} from 'redux'
import {notesReducer} from './notes-reducer'
import {reducer as formReducer} from 'redux-form'
import {authReducer} from "./auth-reducer"
import thunk from 'redux-thunk';
import { usersReducer } from './users-reducer';

const rootReducer = combineReducers({
    notes: notesReducer,
    auth: authReducer,
    form: formReducer,
    users: usersReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store

export default store