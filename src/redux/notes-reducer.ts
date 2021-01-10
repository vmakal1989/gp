const ADD_NODE: string = 'ADD_NODE'

type initialStateType = {
    notes: Array<noteType>
}
type noteType = {
    data: string
    time: string
    note: string
}
type actionType = {
    type: string
    note: noteType
}

const initialState: initialStateType = {
    notes : [
        {
            data : '15.01.20',
            time: '00.00',
            note: ''
        }
    ]



}

export const notes_reducer = (state=initialState, action: actionType): any => {
    switch (action.type) {
        case ADD_NODE:
            return state
        default:
            return state
    }
}

export const addNote = (note: noteType): actionType => ({type: ADD_NODE, note });