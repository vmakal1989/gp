import { noteType } from "../types/types"

const ADD_NOTE: string = 'ADD_NOTE'

const initialState: noteType[] = [
        {
            id: 0,
            date : '24.01.2021',
            time: '07.00',
            value: 'Hello'
        },
        {
            id: 1,
            date : '24.01.2021',
            time: '14.00',
            value: 'Today will be a good day'
        },
        {
            id: 2,
            date : '27.01.2021',
            time: '12.00',
            value: 'Today will be a good day'
        },
        {
            id: 3,
            date : '27.01.2021',
            time: '16.00',
            value: 'Today will be a good day'
        },
        {
            id: 4,
            date : '29.01.2021',
            time: '11.00',
            value: 'Today will be a good day'
        },
        {
            id: 5,
            date : '30.01.2021',
            time: '06.00',
            value: 'Today will be a good day'
        },
        {
            id: 6,
            date : '30.01.2021',
            time: '13.00',
            value: 'Today will be a good day'
        },
        {
            id: 7,
            date : '30.01.2021',
            time: '15.00',
            value: 'Today will be a good day'
        },
        {
            id: 8,
            date : '30.01.2021',
            time: '16.00',
            value: 'Today will be a good day'
        },
        {
            id: 9,
            date : '30.01.2021',
            time: '23.00',
            value: 'Today will be a good day'
        },
]

export const notesReducer = (state=initialState, action: ActionTypes): noteType[] => {
    switch (action.type) {
        case ADD_NOTE:
            const newNote: noteType = {
                id: state[state.length - 1].id + 1,
                date : action.date,
                time: action.hour,
                value: action.value
            }
            for(let i = 0; i < state.length; i++) {
                if(state[i].date === newNote.date && state[i].time === newNote.time) {
                    if (newNote.value) {
                        state.splice(i,1)
                        state.push(newNote)
                    }
                    else state.splice(i,1)
                    return [...state]
                }
            }
            return  newNote.value ? [...state, newNote] : state
        default:
            return state
    }
}

type ActionTypes = AddNewNoteType

type AddNewNoteType = {
    type: typeof ADD_NOTE
    date: string
    hour: string
    value: string
}
export const addNewNote = (date: string, hour: string, value: string): AddNewNoteType => ({type: ADD_NOTE, date, hour, value })

