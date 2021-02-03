import React, {FunctionComponent, useState} from 'react'
import style from './Navbar.module.css'
import classNames from "classnames";
import { Link } from 'react-router-dom';
import ChooseDay from '../ChooseDay/ChooseDay';

interface navbarProps {
	currentPeriod: string
	toggleCurrentPeriod: (type: string) => void
	setShowSelectedDates: (type: boolean) => void
	showSelectedDates: boolean
}

export const Navbar: FunctionComponent<navbarProps> = ({currentPeriod, toggleCurrentPeriod, setShowSelectedDates,showSelectedDates}) => {
	return (
		<nav className={style.container}>
			<ul className={style.items}>
				<li className={classNames([style.item, currentPeriod === 'week' ? style.item_current : ''])}
					onClick={() => toggleCurrentPeriod('week')}>
					<Link className={style.link} to="/" >7 days</Link>
				</li>
				<li className={classNames([style.item, currentPeriod === 'month' ? style.item_current : ''])}
					onClick={ () => toggleCurrentPeriod('month')}>
					<Link className={style.link} to="/" >28 days</Link>
				</li>
				<li className={classNames([style.item, style.item_select_dates, currentPeriod === 'show notes' ? style.item_current : '',showSelectedDates ? style.item_focus : ''])}
					onClick={() => setShowSelectedDates(!showSelectedDates)}>
					Notes
				</li>
				<li className={classNames([style.item, style.item_choose_day, currentPeriod === 'choose date' ? style.item_current : ''])}>
					<ChooseDay toggleCurrentPeriod={toggleCurrentPeriod}/>
				</li>
			</ul>
		</nav>
	)
}