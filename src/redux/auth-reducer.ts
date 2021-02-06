import { stopSubmit } from "redux-form"
import {firebaseUserAPI } from "../firebase/firebase"
import {clearNotesState, getNotes } from "./notes-reducer"
import {ThunkAction} from "redux-thunk"
import {AppStateType} from "./store-redux"

const NEW_SESSIONS: string = 'AUTH/NEW_SESSIONS'
const REMOVE_SESSIONS: string = 'AUTH/REMOVE_SESSIONS'
const TOGGLE_IS_FETCHING: string = 'AUTH/TOGGLE_IS_FETCHING'
const INITIALIZED_USER: string = 'AUTH/INITIALIZED_USER'


type InitialStateType = {
	user: UserType
	isAuth: boolean
	isFetching: boolean
}
type UserType ={
	id: null | string
	firstName: null | string
	lastName: null | string
	email: null | string
}

const initialState: InitialStateType = {
	user: {
		id: null,
		firstName: null,
		lastName: null,
		email: null
	},
	isAuth: false,
	isFetching: false
}


export const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
	switch(action.type) {
		case  NEW_SESSIONS:
			return {...state, isAuth: true,
				   user: {...state.user, id: action.id, firstName: action.firstName, lastName: action.lastName, email: action.email}}
		case  REMOVE_SESSIONS:
			return {...state, isAuth: false,
					user: {...state.user, id: null, firstName: null, lastName: null, email: null}}
		case  TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}
		case INITIALIZED_USER:
			return {...state, isAuth: true,
				user: {...state.user, id: action.id, email: action.email}}
		default:
			return state
	}
}

type ActionTypes = NewSessionsType & RemoveSessionsType & ToggleIsFetchingType & InitializedUser
type NewSessionsType = {
	type: typeof NEW_SESSIONS
	id: null | string
	firstName: null | string
	lastName: null | string
	email: null | string
}
type RemoveSessionsType = {
	type: typeof REMOVE_SESSIONS
}
type ToggleIsFetchingType ={
	type: typeof TOGGLE_IS_FETCHING
	isFetching: boolean
}
type InitializedUser = {
	type: typeof INITIALIZED_USER
	id: string
	email: string | null
}

export const initializedUser = (id: string, email: string | null): InitializedUser => ({type: INITIALIZED_USER, id, email})
const newSessionsAC = (id: string, firstName: string, lastName: string, email: string): NewSessionsType => (
	{type: NEW_SESSIONS, id, firstName, lastName, email}
)
const removeSessionsAC = (): RemoveSessionsType => ({type: REMOVE_SESSIONS})
export const toggleIsFetchingAC = (isFetching : boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})

export const signUp = (firstName: string, lastName: string, email: string, password: string): ThunkAction<void, AppStateType, unknown, ActionTypes> => {
	return (dispatch) => {
	    dispatch(<ActionTypes>toggleIsFetchingAC(true))
		firebaseUserAPI.createAccount(firstName, lastName, email, password)
			.then((response) => {
				if(response.user) {
					let id = response.user.uid
					dispatch(<ActionTypes>newSessionsAC(id, 'firstName', 'lastName', email))
					dispatch(<ActionTypes>toggleIsFetchingAC(false))
				}
			})
			.catch(error => {
				dispatch(<ActionTypes>stopSubmit('signup', {_error: error}))
				dispatch(<ActionTypes>toggleIsFetchingAC(false))
			})
	}
}
export const newSessions = (email: string, password: string): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
	return async (dispatch) => {
		dispatch(<ActionTypes>toggleIsFetchingAC(true))
		 await firebaseUserAPI.newSession(email, password)
			.then((response) => {
				if(response.user) {
					let id = response.user.uid
					dispatch(<ActionTypes>newSessionsAC(id, 'test', 'test', email))
					dispatch(getNotes(id))
					dispatch(<ActionTypes>toggleIsFetchingAC(false))
				}
			})
			.catch(error => {
				dispatch(<ActionTypes>stopSubmit('login', {_error: error}))
				dispatch(<ActionTypes>toggleIsFetchingAC(false))
			})
	}
}
export const removeSessions = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
	return async (dispatch) => {
		await firebaseUserAPI.removeSession()
			.then((response) => {
				dispatch(clearNotesState())
				dispatch(<ActionTypes>removeSessionsAC())
			})
	}
}