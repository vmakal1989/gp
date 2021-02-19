import React from 'react'
import style from '../Admin.module.css'
import {NoteType} from "../../../types/types"
import UserNote from './UserNote'

type PropsType = {
	setShowNotes: (boolean) => void
	userNotes: Array<NoteType>
	resetUserNotes: ()=> void
}

const UserNotes: React.FC<PropsType> = ({setShowNotes,userNotes, resetUserNotes}) => {
	const renderUserNotes = userNotes.map((note,index) => {
		let title: string = note.date
		if(index > 0 && title === userNotes[index - 1].date) title = ''
		return <UserNote key={index} title={title} userNote={note}/>
	})
	return (
			<div className={style.user__notesContainer}>
				<div className={style.user__notesBtnOut} onClick={()=> {
					resetUserNotes()
					setShowNotes(false)
				}}/>
				{renderUserNotes}
			</div>
	)
}

export default UserNotes