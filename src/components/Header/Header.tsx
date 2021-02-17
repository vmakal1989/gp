import React, {FunctionComponent} from 'react'
import style from './Header.module.css'
import classNames from "classnames"
import ChooseDay from '../ChooseDay/ChooseDay'
import { PropsType } from './HeaderContainer'
import CalendarLink from "./Links/CalendarLink";
import NotesLink from "./Links/NotesLInk";
import AdminLink from "./Links/AdminLink";
import LoginLink from "./Links/LoginLink";

export const Header: FunctionComponent<PropsType> = ({setShowSelectedDates,showSelectedDates, isAuth, setShowConfirmWindow, userRole}) => {
	return (
		<nav className={style.container}>
			<ul className={style.items}>
				<CalendarLink />
				<NotesLink setShowSelectedDates={setShowSelectedDates} showSelectedDates={showSelectedDates}/>
				<li className={classNames([style.item, style.item_choose_day])}>
					<ChooseDay />
				</li>
				<div className={style.right}>
					<AdminLink userRole={userRole}/>
					<LoginLink isAuth={isAuth} setShowConfirmWindow={setShowConfirmWindow}/>
				</div>
			</ul>
		</nav>
	)
}