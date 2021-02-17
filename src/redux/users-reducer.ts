import {UserType} from "../types/types"
import {firebaseUserAPI} from "../firebase/firebase"
import {ThunkAction} from "redux-thunk"
import {AppStateType} from "./store-redux"

const SET_USERS: string = 'USERS/SET_USERS'

const initialState: Array<UserType> = []

export const usersReducer = (state = initialState, action: ActionTypes ): Array<UserType> => {
	switch (action.type) {
		case SET_USERS:
			let newState: Array<UserType> = []
			for(let key in action.users) newState.push({id: key, ...action.users[key]})
			return newState
		default:
			return state
	}
}

type ActionTypes = SetUsersType
type SetUsersType = {
	type: typeof SET_USERS
	users: Array<UserType>
}

const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users })

export const getUsers = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
	return async (dispatch) => {
		await firebaseUserAPI.getUsers()
			.then(response => {
				dispatch(setUsersAC(response.val()))
			})
	}
}

