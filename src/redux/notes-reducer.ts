import { noteType } from "../types/types"

const ADD_NOTE: string = 'ADD_NOTE'

type initialStateType = {
    notes: any
}
type actionType = {
    type: string
    note: noteType
}

const initialState: any = [
        {
            date : '',
            time: '',
            value: ''
        },
        {
            date : '21.01.21',
            time: '07.00',
            value: 'Hello'
        },
        {
            date : '21.01.21',
            time: '14.00',
            value: 'Today will be a good day'
        },
        {
            date : '21.01.21',
            time: '16.00',
            value: 'Today will be a good day'
        }
]

export const notesReducer = (state=initialState, action: actionType): any => {
    switch (action.type) {
        case ADD_NOTE:
            for(let i = 0; i < state.length; i++) {
                if(state[i].date === action.note.date && state[i].time === action.note.time) {
                    action.note.value ? state.splice(i,1, action.note) : state.splice(i,1)
                    return [...state]
                }
            }
            return  action.note.value ? [...state, action.note] : state
        default:
            return state
    }
}

export const addNote = (note: noteType): actionType => ({type: ADD_NOTE, note });

