import {NoteType} from "../types/types"
import {firebaseNotesAPI} from "../firebase/firebase";
import { ThunkAction } from "redux-thunk";
import {AppStateType} from "./store-redux";
import moment from "moment";

const SET_USER_NOTES: string = "USER_NOTES/SET_USER_NOTES"
const RESET_USER_NOTES: string = "USER_NOTES/RESET_USER_NOTES"

const initialState: Array<NoteType> = []

export const userNotesReducer = (state= initialState, action: ActionTypes): Array<NoteType> => {
	switch (action.type) {
		case SET_USER_NOTES:
			let newState: NoteType[] = []
			for(let key in action.notes) newState.push({...action.notes[key]})
			newState.sort((a: any, b: any) => a.time-b.time)
			newState.sort((a: NoteType, b: NoteType) => {
				// @ts-ignore
				return moment(a.date.split('.').reverse().join('-'))-moment(b.date.split('.').reverse().join('-'))
			})
			return newState
		case RESET_USER_NOTES:
			return []
	}
	return state
}

type ActionTypes = SetUserNotesType & ResetUserNotesType
type SetUserNotesType = {
	type: typeof SET_USER_NOTES
	notes: Array<NoteType>
}
type ResetUserNotesType = {
	type: typeof RESET_USER_NOTES
}
const setUserNotes = (notes: Array<NoteType>): SetUserNotesType => ({type: SET_USER_NOTES, notes})
export const resetUserNotes = (): ResetUserNotesType => ({type: RESET_USER_NOTES})

export const getUserNotes = (id: string | null): ThunkAction<Promise<void>,AppStateType, unknown, ActionTypes> => {
	return  async (dispatch) => {
		await firebaseNotesAPI.getNotes(id)
			.then(response => dispatch(setUserNotes(response.val())))
	}
}