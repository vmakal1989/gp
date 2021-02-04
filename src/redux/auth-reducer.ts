const NEW_SESSIONS: string = 'USER/NEW_SESSIONS'
const REMOVE_SESSIONS: string = 'USER/REMOVE_SESSIONS'


type InitialStateType = {
	id: null | number
	firstName: null | string
	lastName: null | string
	email: null | string
	isAuth: boolean
}

const initialState: InitialStateType = {
	id: 1,
	firstName: 'Vitali',
	lastName: 'Makal',
	email: 'vmakal@gmail.com',
	isAuth: true
}


export const userReducer = (state = initialState, action: ActionType): InitialStateType => {
	switch(action.type) {
		case  NEW_SESSIONS:
			return state
		case  REMOVE_SESSIONS:
			return {...state, isAuth: false, id: null, firstName: null, lastName: null, email: null}
		default:
			return state
	}
}

type ActionType = NewSessionsType | RemoveSessions

type NewSessionsType ={
	type: typeof NEW_SESSIONS
	id: null | string
	firstName: null | string
	lastName: null | string
	email: null | string
}
export const newSessions = (id: number, firstName: string, lastName: string, email: string) => (
	{type: NEW_SESSIONS, id, firstName, lastName, email}
)
type RemoveSessions = {
	type: typeof REMOVE_SESSIONS
}
export const removeSessions = () => ({type: REMOVE_SESSIONS})
