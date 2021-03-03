import React from 'react'
import {getDaysOfTheMonth} from "../../helpers/getDays/getDays"
import { useState } from 'react'
import moment from 'moment'
import {ElementsOfDayType} from "../../types/types";
import Calendar from "./Calendar";

type PropsType = {}

const CalendarContainer: React.FC<PropsType> = (props) => {
    let [month, setMonth] = useState<number>(moment().month())
    const toggleMonth = (type: string): void => {
        type === 'decrement' && setMonth(--month)
        type === 'increment' && setMonth(++month)
    }

    const structurePage = (): Array<ElementsOfDayType> => {
        let daysInMonthArray: Array<ElementsOfDayType> = getDaysOfTheMonth(month)
        let elementsArr: Array<ElementsOfDayType> = []
        let i: number = 0
        const daysOfWeek: Array<string> = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','null', 'null', 'null', 'null']
        daysOfWeek.map(day => {
            if(day === daysInMonthArray[0].name) {
               daysInMonthArray.map((day) => elementsArr.push(day))
                i++
            }
            if(i < 35) elementsArr.push({date: Math.random() + '', name: 'plug', number: 'plug', current: false, isHoliday: false})
            i++
        })
        return elementsArr
    }

    return <Calendar toggleMonth={toggleMonth} month={month} structurePage={structurePage()} />
}

export default CalendarContainer