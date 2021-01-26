import {combineReducers, createStore} from 'redux'
import {notesReducer} from './notes-reducer'

const rootReducer = combineReducers({
    notes: notesReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer)

export default store