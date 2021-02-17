import { stopSubmit } from "redux-form"
import {firebaseUserAPI } from "../firebase/firebase"
import {clearNotesState, getNotes } from "./notes-reducer"
import {ThunkAction} from "redux-thunk"
import {AppStateType} from "./store-redux"
import {UserType} from "../types/types";

const NEW_SESSIONS: string = 'AUTH/NEW_SESSIONS'
const REMOVE_SESSIONS: string = 'AUTH/REMOVE_SESSIONS'
const TOGGLE_IS_FETCHING: string = 'AUTH/TOGGLE_IS_FETCHING'


type InitialStateType = {
	user: UserType
	isAuth: boolean
	isFetching: boolean
}
const initialState: InitialStateType = {
	user: {
		id: null,
		firstName: null,
		lastName: null,
		email: null,
		role: null
	},
	isAuth: false,
	isFetching: false
}


export const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
	switch(action.type) {
		case  NEW_SESSIONS:
			return {...state, isAuth: true,
				   user: {...state.user, id: action.id, firstName: action.firstName, lastName: action.lastName, email: action.email, role: action.role}}
		case  REMOVE_SESSIONS:
			return {...state, isAuth: false,
					user: {...state.user, id: null, firstName: null, lastName: null, email: null, role: null}}
		case  TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}
		default:
			return state
	}
}

type ActionTypes = NewSessionsType & RemoveSessionsType & ToggleIsFetchingType
type NewSessionsType = {
	type: typeof NEW_SESSIONS
	id: null | string
	firstName: null | string
	lastName: null | string
	email: null | string
	role: null | string
}
type RemoveSessionsType = {
	type: typeof REMOVE_SESSIONS
}
type ToggleIsFetchingType ={
	type: typeof TOGGLE_IS_FETCHING
	isFetching: boolean
}

const newSessionsAC = (id: string, firstName: string, lastName: string, email: string, role: string): NewSessionsType => (
	{type: NEW_SESSIONS, id, firstName, lastName, email, role}
)
const removeSessionsAC = (): RemoveSessionsType => ({type: REMOVE_SESSIONS})
export const toggleIsFetchingAC = (isFetching : boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})

const getUserProfile =  (userId: string, dispatch): void  => {
	 firebaseUserAPI.getUserProfile(userId)
		.then(response => {
			let {email, firstName, lastName, role} = response.val()
			dispatch(<ActionTypes>newSessionsAC(userId, firstName, lastName, email, role))
			dispatch(getNotes(userId))
		})
}

export const signUp = (firstName: string, lastName: string, email: string, password: string): ThunkAction<void, AppStateType, unknown, ActionTypes> => {
	return (dispatch) => {
	    dispatch(<ActionTypes>toggleIsFetchingAC(true))
		firebaseUserAPI.createAccount(email, password)
			.then((response) => {
				if(response.user) {
					let id = response.user.uid
					let role = 'user'
					firebaseUserAPI.setUserProfile(id, email, firstName, lastName, role)
						.then(() => {
							dispatch(<ActionTypes>newSessionsAC(id, firstName, lastName, email, role))
							dispatch(<ActionTypes>toggleIsFetchingAC(false))
						})
				}
			})
			.catch(error => {
				dispatch(<ActionTypes>stopSubmit('signup', {_error: error}))
				dispatch(<ActionTypes>toggleIsFetchingAC(false))
			})
	}
}
export const initializedUser = (id: string): ThunkAction<void, AppStateType, unknown, ActionTypes> => {
	return async (dispatch) => await getUserProfile(id, dispatch)
}
export const newSessions = (email: string, password: string): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
	return async (dispatch) => {
		dispatch(<ActionTypes>toggleIsFetchingAC(true))
		 await firebaseUserAPI.newSession(email, password)
			.then((response) => {
				if(response.user) {
					let id = response.user.uid
					getUserProfile(id, dispatch)
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