import React from 'react'
import {UserType} from "../../../types/types"
import style from '../Admin.module.css'
import User from './User'

type PropsType = {
	users: Array<UserType>
	setShowNotes: (boolean) => void
	getUserNotes: (id: string | null) => void
}

const Users: React.FC<PropsType> = ({users, setShowNotes, getUserNotes}) => {
	const renderUser = users.map((user) => <User key={user.id} user={user}
												 		setShowNotes={setShowNotes}
												 		getUserNotes={getUserNotes}/> )
	return (
		<div className={style.users__container}>
			<div className={style.users__tittle}>Users</div>
			<div className={style.user__containerHeader}>
				<div className={style.user__email}>Email</div>
				<div className={style.user__firstName}>First Name</div>
				<div className={style.user__lastName}>Last Name</div>
				<div className={style.user__edit}>Edit</div>
				<div className={style.user__notes}>Notes</div>
			</div>
			{renderUser}
		</div>
	)
}

export default Users