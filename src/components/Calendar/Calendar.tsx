import React from 'react'
import Day from "./Day/Day"
import style from "./Calendar.module.css"
import moment from 'moment'
import {ElementsOfDayType} from "../../types/types";

type PropsType = {
    toggleMonth: (type: string) => void
    month: number
    structurePage: Array<ElementsOfDayType>
}
const Calendar: React.FC<PropsType> = ({toggleMonth, month, structurePage}) => {
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
                { structurePage.map(day => <Day key={day.date} day={day}/>)}
            </div>
        </div>

    )
}

export default Calendar