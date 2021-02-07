import React from 'react'
import {NavLink } from 'react-router-dom'
import style from './Notepad.module.css'
import { DatesDataType } from './NotepadContainer'
import NotepadRowContainer from "./NotepadRow/NotepadRowContainer"

type PropsType = {
    date: string | string[]
    datesData: DatesDataType
    hours: Array<string>
    getTitle: (string) => void
}


export const Notepad: React.FC<PropsType> = ({date, datesData, hours, getTitle}) => {

    const renderNotepadRow = () => {
        return datesData.current ?
            datesData.data.map(el => <NotepadRowContainer key={el.id} hour={el.time} date={[el.date]} title={getTitle(el.date)}/>)
            :
            hours.map(hour => <NotepadRowContainer key={hour} hour={hour} date={date} title={''}/>)
    }

    return (
        <div className={style.container}>
            <div className={style.notepad}>
                <NavLink to='/' className={style.log_out} />
                {date.length === 1 ? <div className={style.title}>{date}</div> :
                    datesData.data.length === 0 ? <div className={style.notepad__message}>There aren't notes in the specified range</div> : ''}
                {renderNotepadRow()}
            </div>
        </div>
    )
}
