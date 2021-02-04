import {noteType} from "../types/types"

const ADD_NOTE: string = 'NOTES/ADD_NOTE'
const EDIT_NOTE: string = 'NOTES/CHANGE_NOTE'
const REMOVE_NOTE: string = 'NOTES/REMOVE_NOTE'


const initialState: noteType[] = []

export const notesReducer = (state=initialState, action: ActionTypes): noteType[] => {
    switch (action.type) {
        case ADD_NOTE:
            const newNote: noteType = {
                id: state.length !== 0 ? state[state.length - 1].id + 1 : 1,
                user_id: action.user_id,
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
        default:
            return state
    }
}

type ActionTypes = AddNewNoteType & EditNoteType & RemoveNoteType

type AddNewNoteType = {
    type: typeof ADD_NOTE
    date: string
    hour: string
    value: string
    user_id: number
}
type EditNoteType = {
    type: typeof EDIT_NOTE
    id: number
    value: string
}
type RemoveNoteType = {
    type: typeof REMOVE_NOTE
    id: number
}

const addNoteAC = (date: string, hour: string, value: string, user_id: number): AddNewNoteType => ({type: ADD_NOTE, date, hour, value, user_id})
const editNoteAC = (id: number, value: string): EditNoteType  => ({type: EDIT_NOTE, id, value})
const removeNoteAC = (id: number): RemoveNoteType => ({type: REMOVE_NOTE, id})

export const addNewNote = (date: string, hour: string, value: string) => {
    return (dispatch, getState) => {
        dispatch(addNoteAC(date, hour, value, getState().auth.id))
    }
}
export const editNote = (id: number, value: string) => {
    return (dispatch) => {
        dispatch(editNoteAC(id, value))
    }
}
export const removeNote = (id: number) => {
    return (dispatch) => {
        dispatch(removeNoteAC(id))
    }
}


