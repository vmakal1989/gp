import React, {FunctionComponent} from 'react'
import style from './Header.module.css'
import classNames from "classnames"
import { NavLink } from 'react-router-dom'
import ChooseDay from '../ChooseDay/ChooseDay'
import { PropsType } from './HeaderContainer'

export const Header: FunctionComponent<PropsType> = ({setShowSelectedDates,showSelectedDates, isAuth, setShowConfirmWindow}) => {
	return (
		<nav className={style.container}>
			<ul className={style.items}>
				<NavLink className={classNames([style.link, style.item])}
					     activeClassName={style.item_current} exact to="/" >
					<li>Calendar</li>
				</NavLink>
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
				<li className={classNames([style.item, style.item_choose_day])}>
					<ChooseDay />
				</li>
				{
					!isAuth ?
						<NavLink className={classNames([style.link, style.item, style.item_login])} exact to="/login"
								 activeClassName={style.item_current}
								 isActive={(match, location):boolean => {
								 	if(location.pathname === '/login' || location.pathname === '/signup'){
								 		return true
									}
								 	return false
								 }}
						>
							<li>Log In</li>
						</NavLink>
					:
						<li className={classNames([style.link, style.item, style.item_login])} onClick={setShowConfirmWindow}>Sign out</li>
				}

			</ul>
		</nav>
	)
}