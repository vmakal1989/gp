import React, {FunctionComponent} from 'react'
import style from './Navbar.module.css'
import classNames from "classnames";
import { Link } from 'react-router-dom';

interface navbarProps {
	currentPeriod: string,
	toggleCurrentPeriod: (type: string) => void
}

export const Navbar: FunctionComponent<navbarProps> = ({currentPeriod, toggleCurrentPeriod}) => {
	return (
		<nav className={style.container}>
			<ul className={style.items}>
				<Link to="/" >
					<li className={classNames([style.item, currentPeriod === 'week' ? style.item_current : ''])} onClick={() => toggleCurrentPeriod('week')}>7 days</li>
				</Link>
				<Link to="/" >
					<li className={classNames([style.item, currentPeriod === 'month' ? style.item_current : ''])} onClick={ () => toggleCurrentPeriod('month')}>28 days</li>
				</Link>
				<Link to="/" >
					<li className={classNames([style.item, currentPeriod === 'year' ? style.item_current : ''])} onClick={ () => toggleCurrentPeriod('year')}>a year</li>
				</Link>
			</ul>
		</nav>
	)
}