import React, {useState} from 'react'
import style from './Admin.module.css'
import Users from "./Users/Users"
import {NoteType, UserType} from '../../types/types'
import UserNotes from './UserNotes/UserNotes'

type PropsType = {
	users: Array<UserType>
	getUserNotes: (id: string | null) => void
	userNotes: Array<NoteType>
	resetUserNotes: () => void
	isFetchingNotes: boolean
	isFetchingUsers: boolean
}

const Admin: React.FC<PropsType> = (props) => {
		const [showNotes, setShowNotes] = useState<boolean>(false)
	return (
		<div className={style.container}>
			{ !showNotes && <Users users={props.users}
								   setShowNotes={setShowNotes}
								   getUserNotes={props.getUserNotes}
								   isFetching={props.isFetchingUsers}/> }
			{ showNotes && <UserNotes setShowNotes={setShowNotes}
									  userNotes={props.userNotes}
									  resetUserNotes={props.resetUserNotes}
									  isFetching={props.isFetchingNotes}/> }
		</div>
	)
}


export default Admin