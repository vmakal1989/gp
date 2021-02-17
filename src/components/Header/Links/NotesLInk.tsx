import React from 'react'
import classNames from "classnames"
import style from "../Header.module.css"
import {NavLink} from "react-router-dom"

type PropsType = {
	showSelectedDates: boolean
	setShowSelectedDates: (type: boolean) => void
}

const NotesLink: React.FC<PropsType> = ({showSelectedDates, setShowSelectedDates}) => {
	return (
		<NavLink className={classNames([style.link,style.item, style.item_select_dates, showSelectedDates ? style.item_focus : ''])}
				 onClick={() => setShowSelectedDates(!showSelectedDates)}
				 to={''}
				 activeClassName={style.item_current}
				 isActive={(match, location): boolean => {
					 let loc = location.pathname.split('/')
					 return loc[1] === 'notepad'
				 }}>
			<li>Notes</li>
		</NavLink>
	)
}

export default NotesLink