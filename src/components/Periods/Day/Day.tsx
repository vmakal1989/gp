import React, {FunctionComponent} from 'react'
import style from './Day.module.css'
import classNames from "classnames";
import { Link } from 'react-router-dom';
import { elementsOfDayType } from '../../../types/types';

interface dayProps {
    day: elementsOfDayType
    key: string
}

export const Day: FunctionComponent<dayProps> = ({day, key}) => {
    return (
        <Link to={'/notepad/'+ day.date} >
            <div className={classNames([style.item, day.current ? style.current : ''])}>
                <div className={classNames([style.nameOfDay, day.isHoliday ? style.isHoliday : ''])}>{day.name}</div>
                <div className={classNames([style.number])}>{day.number}</div>
                <div className={classNames([style.note])}>Note: {day.note}</div>
            </div>
        </Link>
    )
}