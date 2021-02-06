import React from 'react'
import {getDaysOfTheWeek} from "../../helpers/getDays/getDays"
import Day from "./Day/Day"
import style from "./Calendar.module.css"

type PropsType = {}
const Calendar: React.FC<PropsType> = () => {
    return (
        <div className={style.container}>
            { getDaysOfTheWeek().map(day => <Day key={day.date} day={day}/>)}
        </div>
    )
}

export default Calendar