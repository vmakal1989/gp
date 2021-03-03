import {UserType} from '../types/types'
import {firebaseUserAPI} from '../firebase/firebase'
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from './store-redux'

const SET_USERS: string = 'USERS/SET_USERS'
const TOGGLE_IS_FETCHING: string = 'USERS/TOGGLE_IS_FETCHING'

type initialStateType = {
	users: Array<UserType>
	isFetching: boolean
}

const initialState: initialStateType = {
	users: [],
	isFetching: false
}

export const usersReducer = (state = initialState, action: ActionTypes ): initialStateType => {
	switch (action.type) {
		case SET_USERS:
			let users: Array<UserType> = []
			for(let key in action.users) users.push({id: key, ...action.users[key]})
			return {...state, users}
		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}
		default:
			return state
	}
}

type ActionTypes = SetUsersType & ToggleIsFetchingType
type SetUsersType = {
	type: typeof SET_USERS
	users: Array<UserType>
}
type ToggleIsFetchingType = {
	type: typeof TOGGLE_IS_FETCHING
	isFetching: boolean
}
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users })

export const getUsers = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
	return async (dispatch) => {
		dispatch(<ActionTypes>toggleIsFetching(true))
		await firebaseUserAPI.getUsers()
			.then(response => {
				dispatch(<ActionTypes>setUsersAC(response.val()))
				dispatch(<ActionTypes>toggleIsFetching(false))
			})
	}
}

export const sendNewUserData = (userId, email, firstName, lastName, role): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
	return async (dispatch) => {
		await firebaseUserAPI.editUserProfile(userId, email, firstName, lastName, role)
			.then(() => dispatch(getUsers()))
	}
}

