import React, {FunctionComponent} from 'react'
import style from './Day.module.css'
import classNames from "classnames";
import { Link } from 'react-router-dom';
import { elementsOfDayType } from '../../../types/types';
import { connect } from 'react-redux';
import {AppStateType} from "../../../redux/store-redux";

type OwnPropsType = {
    day: elementsOfDayType
}
type MapStateProsType = {
    notes: number
}
type DayPropsType = OwnPropsType & MapStateProsType

const Day: FunctionComponent<DayPropsType> = ({day, notes}) => {
    return (
        <Link className={style.link} to={'notepad/'+ day.date} >
            <div className={classNames([style.item, day.current ? style.current : ''])}>
                <div className={classNames([style.nameOfDay, day.isHoliday ? style.isHoliday : ''])}>{day.name}</div>
                <div className={classNames([style.number])}>{day.number}</div>
                <div className={classNames([style.note, notes > 0 ? style.green : ''])}>Notes: {notes}</div>
            </div>
        </Link>
    )
}

const getNumberOfNotes = (state: AppStateType, date: string): number => {
    let notesFilter = state.notes.filter(note => note.date === date)
    return notesFilter.length
}

const mapStateToProps = (state , {day}): MapStateProsType => {
    return {
        notes: getNumberOfNotes(state, day.date)
    }
}

export default connect<MapStateProsType, {}, OwnPropsType, AppStateType>(mapStateToProps)(Day)