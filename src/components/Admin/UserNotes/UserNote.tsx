import React from 'react'
import style from '../Admin.module.css'
import {NoteType} from "../../../types/types"

type PropsType = {
	userNote: NoteType
	title: string
}

const UserNote: React.FC<PropsType> = ({userNote, title}) => {
	return (
		<div>
			{title && <div className={style.user__noteTitle}>{title}</div>}
			<div className={style.user__note}>
				<div className={style.user__noteTime}>{userNote.time}</div>
				<div className={style.user__noteBody}>{userNote.value}</div>
			</div>
		</div>
	)
}

export default UserNote