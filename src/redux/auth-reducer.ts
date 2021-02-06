import { stopSubmit } from "redux-form"
import {firebaseUserAPI } from "../firebase/firebase"
import {clearNotesState, getNotes } from "./notes-reducer"

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


export const authReducer = (state = initialState, action: ActionType): InitialStateType => {
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

type ActionType = NewSessionsType & RemoveSessionsType & ToggleIsFetchingType & InitializedUser
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

export const initializedUser = (id: string, email: string | null) => ({type: INITIALIZED_USER, id, email})
const newSessionsAC = (id: string, firstName: string, lastName: string, email: string) => (
	{type: NEW_SESSIONS, id, firstName, lastName, email}
)
const removeSessionsAC = () => ({type: REMOVE_SESSIONS})
export const toggleIsFetching = (isFetching : boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const signUp = (firstName: string, lastName: string, email: string, password: string) => {
	return  async (dispatch) => {
		await dispatch(toggleIsFetching(true))
		firebaseUserAPI.createAccount(firstName, lastName, email, password)
			.then((response) => {
				if(response.user) {
					let id = response.user.uid
					dispatch(newSessionsAC(id, 'firstName', 'lastName', email))
					dispatch(toggleIsFetching(false))
				}
			})
			.catch(error => {
				dispatch(stopSubmit('signup', {_error: error}))
				dispatch(toggleIsFetching(false))
			})
	}
}
export const newSessions = (email: string, password: string) => {
	return  async (dispatch) => {
		 await dispatch(toggleIsFetching(true))
		 firebaseUserAPI.newSession(email, password)
			.then((response) => {
				if(response.user) {
					let id = response.user.uid
					dispatch(newSessionsAC(id, 'test', 'test', email))
					dispatch(getNotes(id))
					dispatch(toggleIsFetching(false))
				}
			})
			.catch(error => {
				dispatch(stopSubmit('login', {_error: error}))
				dispatch(toggleIsFetching(false))
			})
	}
}
export const removeSessions = () => {
	return async (dispatch) => {
		await firebaseUserAPI.removeSession()
			.then((response) => {
				dispatch(clearNotesState())
				dispatch(removeSessionsAC())
			})
	}
}