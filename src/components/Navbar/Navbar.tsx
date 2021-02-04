import React, {FunctionComponent} from 'react'
import style from './Navbar.module.css'
import classNames from "classnames";
import { Link } from 'react-router-dom';
import ChooseDay from '../ChooseDay/ChooseDay';
import { PropsType } from './NavbarContainer';

export const Navbar: FunctionComponent<PropsType> = ({currentPeriod, toggleCurrentPeriod, setShowSelectedDates,showSelectedDates, isAuth, removeSessions}) => {
	return (
		<nav className={style.container}>
			<ul className={style.items}>
				<Link className={classNames([style.link, style.item, currentPeriod === 'week' ? style.item_current : ''])}
					onClick={() => toggleCurrentPeriod('week')} to="/" >
					<li>7 days</li>
				</Link>
				<Link className={classNames([style.link, style.item, currentPeriod === 'month' ? style.item_current : ''])}
					  onClick={ () => toggleCurrentPeriod('month')} to="/" >
					<li>28 days</li>
				</Link>
				<li className={classNames([style.item, style.item_select_dates, currentPeriod === 'show notes' ? style.item_current : '',showSelectedDates ? style.item_focus : ''])}
					onClick={() => setShowSelectedDates(!showSelectedDates)}>
					Notes
				</li>
				<li className={classNames([style.item, style.item_choose_day, currentPeriod === 'choose date' ? style.item_current : ''])}>
					<ChooseDay toggleCurrentPeriod={toggleCurrentPeriod}/>
				</li>
				{
					!isAuth ?
						<Link className={classNames([style.link, style.item, style.item_login, currentPeriod === 'login' ? style.item_current : ''])} to="/login"
							  onClick={ () => toggleCurrentPeriod('login')}>
							<li>Log In</li>
						</Link>
					:
						<li className={classNames([style.link, style.item, style.item_login])} onClick={removeSessions}>Sign out</li>
				}

			</ul>
		</nav>
	)
}