import firebase from 'firebase'
import store from './store-redux'
import {initializedUser} from './auth-reducer'

const INITIALIZED: string = 'APP/INITIALIZED'


type InitialStateType = {
	initialized: boolean
}
let initialState: InitialStateType = {
	initialized: false
}

export const appReducer = (state = initialState, action: ActionTypes): InitialStateType => {
	switch(action.type) {
		case  INITIALIZED:
			return {...state, initialized: action.value}
		default:
			return state
	}
}

type ActionTypes = InitializedType
type InitializedType = {
	type: typeof INITIALIZED
	value: boolean
}

export const initializeAC = (value: boolean): InitializedType => ({type: INITIALIZED, value})

export const initializeApp = () => {
	return (dispatch) => {
		firebase.auth().onAuthStateChanged((user) => {
			// @ts-ignore
			if(user) store.dispatch(initializedUser(user.uid))
			else dispatch(initializeAC(true))
		})
	}
}