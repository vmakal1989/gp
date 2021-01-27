import React, {FunctionComponent} from 'react'
import style from './Month.module.css'
import Day from "../Day/Day";
import {getDaysOfTheWeek} from "../../../helpers/getDays/getDays"

export const Month: FunctionComponent = () => {
	return (
		<div className={style.container}>
			{ getDaysOfTheWeek(28).map(day => <Day key={day.date} day={day}/>)}
		</div>
	)
}