import {NoteType} from '../types/types'
import {firebaseNotesAPI} from '../firebase/firebase'
import { ThunkAction } from 'redux-thunk'
import {AppStateType} from './store-redux'
import moment from 'moment'

const SET_USER_NOTES: string = 'USER_NOTES/SET_USER_NOTES'
const RESET_USER_NOTES: string = 'USER_NOTES/RESET_USER_NOTES'
const TOGGLE_IS_FETCHING: string = 'USER_NOTES/TOGGLE_IS_FETCHING'

type InitialStateType = {
	notes: Array<NoteType>
	isFetching: boolean
}

const initialState: InitialStateType = {
	notes: [],
	isFetching: false
}

export const userNotesReducer = (state= initialState, action: ActionTypes): InitialStateType => {
	switch (action.type) {
		case SET_USER_NOTES:
			let notes: NoteType[] = []
			for(let key in action.notes) notes.push({...action.notes[key]})
			notes.sort((a: any, b: any) => a.time-b.time)
			notes.sort((a: NoteType, b: NoteType) => {
				// @ts-ignore
				return moment(a.date.split('.').reverse().join('-'))-moment(b.date.split('.').reverse().join('-'))
			})
			return {...state, notes: notes}
		case RESET_USER_NOTES:
			return {...state, notes: []}
		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}
	}
	return state
}

type ActionTypes = SetUserNotesType & ResetUserNotesType & ToggleIsFetchingType
type SetUserNotesType = {
	type: typeof SET_USER_NOTES
	notes: Array<NoteType>
}
type ResetUserNotesType = {
	type: typeof RESET_USER_NOTES
}
type ToggleIsFetchingType = {
	type: typeof TOGGLE_IS_FETCHING
	isFetching: boolean
}
const setUserNotes = (notes: Array<NoteType>): SetUserNotesType => ({type: SET_USER_NOTES, notes})
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const resetUserNotes = (): ResetUserNotesType => ({type: RESET_USER_NOTES})

export const getUserNotes = (id: string | null): ThunkAction<Promise<void>,AppStateType, unknown, ActionTypes> => {
	return  async (dispatch) => {
		dispatch(<ActionTypes>toggleIsFetching(true))
		await firebaseNotesAPI.getNotes(id)
			.then(response => {
				dispatch(<ActionTypes>setUserNotes(response.val()))
				dispatch(<ActionTypes>toggleIsFetching(false))
			})
	}
}