import {elementsOfDayType} from "../../types/types";
import moment from "moment";

const isHoliday = (name: string): boolean => {
	return name === "Saturday" ? true : name === "Sunday" ? true : false
}
export const getDaysOfTheWeek = (count: number): elementsOfDayType[] => {
	const daysOfTheWeek: elementsOfDayType[] = []
	for(let i = moment().dayOfYear(); i < moment().dayOfYear() + count; i++) {
		daysOfTheWeek.push({
			name: moment().dayOfYear(i).format('dddd'),
			number: moment().dayOfYear(i).format('D'),
			current: moment().dayOfYear() === i ? true : false,
			isHoliday: isHoliday(moment().dayOfYear(i).format('dddd')),
			date: moment().dayOfYear(i).format("DD.MM.YYYY")
		})
	}
	return daysOfTheWeek
}