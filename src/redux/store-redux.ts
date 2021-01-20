import {combineReducers, createStore} from 'redux'
import {notesReducer} from './notes-reducer'

const reducers: any = combineReducers({
    notes: notesReducer
})

const store = createStore(reducers)

export default store