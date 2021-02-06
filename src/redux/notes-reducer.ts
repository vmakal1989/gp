import {noteType} from "../types/types"
import {firebaseNotesAPI} from "../firebase/firebase";
import firebase from "firebase";

const SET_NOTES: string = 'NOTES/SET_NOTES'
const ADD_NOTE: string = 'NOTES/ADD_NOTE'
const EDIT_NOTE: string = 'NOTES/CHANGE_NOTE'
const REMOVE_NOTE: string = 'NOTES/REMOVE_NOTE'
const CLEAR_NOTES_STATE: string = 'NOTES/CLEAR_NOTES_STATE'


const initialState: noteType[] = []

export const notesReducer = (state=initialState, action: ActionTypes): noteType[] => {
    switch (action.type) {
        case SET_NOTES:
            let newState: noteType[] = []
            for(let key in action.notes) newState.push({id: key, ...action.notes[key]})
            return newState
        case ADD_NOTE:
            const newNote: noteType = {
                id: action.id,
                userId: action.userId,
                date : action.date,
                time: action.hour,
                value: action.value
            }
            return [...state, newNote]
        case EDIT_NOTE:
            state.map(note => note.id === action.id ? note.value = action.value : true)
            return state
        case REMOVE_NOTE:
            return state.filter(note => note.id !== action.id ? note : null)
        case CLEAR_NOTES_STATE:
            return []
        default:
            return state
    }
}

type ActionTypes = AddNewNoteType & EditNoteType & RemoveNoteType & SetNotesType & clearNotesStateType

type SetNotesType = {
    type: typeof SET_NOTES
    notes: object
}
type AddNewNoteType = {
    type: typeof ADD_NOTE
    id: string | null
    date: string
    hour: string
    value: string
    userId: string
}
type EditNoteType = {
    type: typeof EDIT_NOTE
    id: string
    value: string
}
type RemoveNoteType = {
    type: typeof REMOVE_NOTE
    id: string
}
type clearNotesStateType = {
    type: typeof CLEAR_NOTES_STATE
}

const setNotes = (notes: object): SetNotesType => ({type: SET_NOTES, notes})
const addNoteAC = (id: string | null, date: string, hour: string, value: string, userId: string): AddNewNoteType => ({type: ADD_NOTE, id, date, hour, value, userId: userId})
const editNoteAC = (id: string, value: string): EditNoteType  => ({type: EDIT_NOTE, id, value})
const removeNoteAC = (id: string): RemoveNoteType => ({type: REMOVE_NOTE, id})
const clearNotesStateAC = (): clearNotesStateType => ({type: CLEAR_NOTES_STATE})

export const getNotes = (userID: string) => {
    return async (dispatch) => {
        await firebaseNotesAPI.getNotes(userID)
            .then((response) => {
                let notes = response.val()
                dispatch(setNotes(notes))})
    }
}

export const addNewNote = (date: string, time: string, value: string) => {
    return async (dispatch, getState) => {
        let userId = getState().auth.user.id
        await firebaseNotesAPI.addNote(userId,{date, time, value, userId})
            .then((response) => dispatch(addNoteAC(response.key, date, time, value, userId)))
    }
}
export const editNote = (id: string,date: string, time: string, value: string) => {
    return (dispatch, getState) => {
        let userId = getState().auth.user.id
        firebaseNotesAPI.editNote(userId, id,date, time, value)
            .then(()=> dispatch(editNoteAC(id, value)))

    }
}
export const removeNote = (id: string) => {
    return async (dispatch, getState) => {
        let userId = getState().auth.user.id
        await firebaseNotesAPI.removeNote(userId, id)
            .then(() => dispatch(removeNoteAC(id)))
    }
}
export const clearNotesState = () => (dispatch) => dispatch(clearNotesStateAC())


