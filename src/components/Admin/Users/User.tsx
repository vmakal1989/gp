import classNames from 'classnames'
import React, {useState} from 'react'
import {UserType} from "../../../types/types"
import style from '../Admin.module.css'
import UserEditWindow from "./UserEditWindow";

type PropsType = {
	user: UserType
	setShowNotes: (boolean) => void
	getUserNotes: (id: string | null) => void
}

const User: React.FC<PropsType> = ({user, setShowNotes, getUserNotes}) => {
	const [editUser, setEditUSer] = useState<boolean>(false)
	return (
		<div className={style.user__container}>
			<div className={style.user__email}>{user.email}</div>
			<div className={style.user__firstName}>{user.firstName}</div>
			<div className={style.user__lastName}>{user.lastName}</div>
			<div className={classNames([style.user__edit, style.user__editLink])}
				onClick={(event)=> setEditUSer(!editUser)}>
				Edit
			</div>
			<div className={classNames([style.user__notes, style.user__notesLink])}
				onClick={()=> {
					getUserNotes(user.id)
					setShowNotes(true)
				}}>
				Show
			</div>
			{editUser && <UserEditWindow setEditUSer={setEditUSer} user={user} />}
		</div>
	)
}

export default User