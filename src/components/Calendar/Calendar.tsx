import React from 'react'
import {getDaysOfTheMonth} from "../../helpers/getDays/getDays"
import Day from "./Day/Day"
import style from "./Calendar.module.css"
import { useState } from 'react'
import moment from 'moment'

type PropsType = {}
const Calendar: React.FC<PropsType> = () => {
    let [month, setMonth] = useState<number>(moment().month())
    const toggleMonth = (type: string): void => {
        type === 'decrement' && setMonth(--month)
        type === 'increment' && setMonth(++month)
    }
    return (
        <div className={style.container}>
            <div className={style.navContainer}>
                <div className={style.arrowLeftBox} onClick={()=> {toggleMonth('decrement')}}>
                    <div className={style.navLeft} />
                </div>
                <div className={style.title}>{moment().month(month).format("MMMM YYYY")}</div>
                <div className={style.arrowRightBox} onClick={()=> {toggleMonth('increment')}}>
                    <div className={style.navRight} />
                </div>
            </div>
            <div className={style.items}>
                { getDaysOfTheMonth(month).map(day => <Day key={day.date} day={day}/>)}
            </div>
        </div>

    )
}

export default Calendar