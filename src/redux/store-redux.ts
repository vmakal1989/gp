import {applyMiddleware, combineReducers, createStore} from 'redux'
import {notesReducer} from './notes-reducer'
import {reducer as formReducer} from 'redux-form'
import {userReducer} from "./user-reducer"
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    notes: notesReducer,
    user: userReducer,
    form: formReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store

export default store