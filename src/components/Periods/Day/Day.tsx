import React, {FunctionComponent} from 'react'
import style from './Day.module.css'
import classNames from "classnames";
import { Link } from 'react-router-dom';
import { elementsOfDayType } from '../../../types/types';
import { connect } from 'react-redux';

type dayProps ={
    day: elementsOfDayType
    notes: number
}
const Day: FunctionComponent<dayProps> = ({day, notes}) => {
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

const getNumberOfNotes = (notes :Array<elementsOfDayType>, date: string): number => {
    let notesFilter = notes.filter(note => note.date === date)
    return notesFilter.length
}

const mapStateToProps = (state, {day}): Object => {
    return {
        notes: getNumberOfNotes(state.notes, day.date)
    }
}

export const DayContainer: FunctionComponent<any> = connect(mapStateToProps, '')(Day)