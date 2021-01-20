import React, {FunctionComponent} from 'react'
import style from './Day.module.css'
import classNames from "classnames";
import { Link } from 'react-router-dom';
import { elementsOfDayType } from '../../../types/types';
import { connect } from 'react-redux';

interface dayProps {
    day: elementsOfDayType
    key: string
    notes: number
}
interface dayContainerType {
    day: elementsOfDayType
}

const Day: FunctionComponent<dayProps> = ({day, key, notes}) => {
    return (
        <Link to={'/notepad/'+ day.date} >
            <div className={classNames([style.item, day.current ? style.current : ''])}>
                <div className={classNames([style.nameOfDay, day.isHoliday ? style.isHoliday : ''])}>{day.name}</div>
                <div className={classNames([style.number])}>{day.number}</div>
                <div className={classNames([style.note, notes > 0 ? style.green : ''])}>Notes: {notes}</div>
            </div>
        </Link>
    )
}

const getNumberOfNotes = (notes, date): number => {
    let notesFilter = notes.filter(note => note.date === date)
    debugger
    return notesFilter.length
}

const mapStateToProps = (state, {day}) => {
    return {
        notes: getNumberOfNotes(state.notes, day.date)
    }
}

export const DayContainer: any = connect(mapStateToProps, null)(Day)