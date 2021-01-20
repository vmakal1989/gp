import React, {FunctionComponent} from 'react'
import style from './Week.module.css'
import {DayContainer} from "../Day/Day"
import {getDaysOfTheWeek} from "../../../helpers/getDays/getDays"

export const Week: FunctionComponent = () => {
	return (
		<div className={style.container}>
				{ getDaysOfTheWeek(7).map(day => <DayContainer key={day.date} day={day}/>)}
		</div>
	)
}
