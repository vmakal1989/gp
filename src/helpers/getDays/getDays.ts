import {elementsOfDayType} from "../../types/types";
import moment from "moment";

const isHoliday = (name: string): boolean => {
	return name === "Saturday" ? true : name === "Sunday"
}

const getDaysArrayByMonth = (): Array<moment.Moment>  => {
	let daysInMonth: number = moment().daysInMonth();
	let arrDays: Array<moment.Moment> = [];
	while(daysInMonth) {
		arrDays.push(moment().date(daysInMonth));
		daysInMonth--;
	}
	return arrDays.reverse();
}

export const getDaysOfTheWeek = (): elementsOfDayType[] => {
	const daysInMonth: Array<moment.Moment> = getDaysArrayByMonth();
	const daysOfTheWeek: elementsOfDayType[] = []
	for(let el of daysInMonth) {
		daysOfTheWeek.push({
			name: el.format('dddd'),
			number: el.format('D'),
			current: el.format("MMM Do YY") === moment().format("MMM Do YY"),
			isHoliday: isHoliday(el.format('dddd')),
			date: el.format("DD.MM.YYYY")
		})
	}
	return daysOfTheWeek
}