import React, {FunctionComponent} from 'react'
import style from './Month.module.css'
import {Day} from "../Day/Day";
import moment from 'moment'
import { elementsOfDayType } from '../../../types/types';

const isHoliday = (name: string): boolean => {
	return name === "Saturday" ? true : name === "Sunday" ? true : false
}
const getDaysOfTheWeek = (): elementsOfDayType[] => {
	const daysOfTheWeek: elementsOfDayType[] = []
	for(let i = moment().dayOfYear(); i < moment().dayOfYear() + 28; i++) {
		daysOfTheWeek.push({
			name: moment().dayOfYear(i).format('dddd'),
			number: moment().dayOfYear(i).format('D'),
			note: 0,
			current: moment().dayOfYear() === i ? true : false,
			isHoliday: isHoliday(moment().dayOfYear(i).format('dddd')),
			date: moment().dayOfYear(i).format("DD.MM.YY")
		})
	}
	return daysOfTheWeek
}

export const Month: FunctionComponent = () => {
	return (
		<div className={style.container}>
			{ getDaysOfTheWeek().map(day => <Day key={day.date} day={day}/>)}
		</div>
	)
}