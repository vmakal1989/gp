import React from 'react'
import classNames from "classnames";
import style from "../Header.module.css";
import {NavLink} from "react-router-dom";

const CalendarLink: React.FC = () => {
	return (
		<NavLink className={classNames([style.link, style.item])}
				 activeClassName={style.item_current} exact to="/" >
			<li>Calendar</li>
		</NavLink>
	)
}

export default CalendarLink