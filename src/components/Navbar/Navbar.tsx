import React, {FunctionComponent} from 'react'
import style from './Navbar.module.css'
import classNames from "classnames";
import { Link } from 'react-router-dom';

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
				<Link to="/" >
					<li className={classNames([style.item, currentPeriod === 'week' ? style.item_current : ''])} onClick={() => toggleCurrentPeriod('week')}>7 days</li>
				</Link>
				<Link to="/" >
					<li className={classNames([style.item, currentPeriod === 'month' ? style.item_current : ''])} onClick={ () => toggleCurrentPeriod('month')}>28 days</li>
				</Link>
					<li className={classNames([style.item, currentPeriod === 'show notes' ? style.item_current : '',showSelectedDates ? style.item_focus : ''])}
						onClick={() => setShowSelectedDates(!showSelectedDates)}>
						Show notes
					</li>
			</ul>
		</nav>
	)
}