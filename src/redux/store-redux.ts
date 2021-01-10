import {combineReducers, createStore, applyMiddleware} from 'redux'
import {notes_reducer} from './notes-reducer'
import thunkMiddleware from 'redux-thunk'

const reducers: any = combineReducers({
    notes: notes_reducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store